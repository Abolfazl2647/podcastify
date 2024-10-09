import Axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

import Queue from '@/service/queue';
import { GetRefreshToken } from '@/api/auth/login';
import { setAuthTokens, getToken, getRefreshToken } from '@/utils/storage';

let isRefreshing = false;
const FailRequestQueue = new Queue();

const processQueue = (error: AxiosError | null, token: string | null) => {
    const QueueList = FailRequestQueue.show();

    QueueList.forEach((promise: any) => {
        if (error) {
            promise.reject(error);
        } else {
            promise.resolve(token);
        }
    });
    FailRequestQueue.empty();
};

const AxiosInstance = Axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'Accept-Language': 'fa' }
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = getToken();

        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    async function (error) {
        const refreshToken = getRefreshToken();

        if (!error.response || !refreshToken) return Promise.reject(error);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest.Retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    FailRequestQueue.enqueue({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;

                        return Axios(originalRequest);
                    })
                    .catch((error) => {
                        return Promise.reject(error);
                    });
            }

            isRefreshing = true;
            originalRequest.Retry = true;

            return new Promise(async (resolve, reject) => {
                try {
                    const refreshTokenResult = await GetRefreshToken(refreshToken);

                    if (refreshTokenResult.status !== 200) reject(error);

                    setAuthTokens(refreshTokenResult.data);

                    const { accessToken } = refreshTokenResult.data;

                    if (originalRequest) {
                        isRefreshing = false;
                        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                        resolve(Axios(originalRequest));
                    }

                    if (FailRequestQueue.length > 0) processQueue(null, accessToken);
                } catch (err) {
                    reject(err);
                    FailRequestQueue.empty();
                    NextResponse.redirect(new URL('/auth/signin'));
                }
            });
        }

        return Promise.reject(error);
    }
);

export default AxiosInstance;
