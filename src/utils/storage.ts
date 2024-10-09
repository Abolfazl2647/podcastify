'use client';

import { ILoginResponse, IRefreshTokenReponse } from '@/api/auth/types';

import Cookies from 'js-cookie';

export const setAuthTokens = (authResponse: ILoginResponse | IRefreshTokenReponse) => {
    const { accessToken, refreshToken } = authResponse;

    Cookies.set('token', accessToken, {
        expires: 1 / 64
    });

    Cookies.set('refreshToken', refreshToken, {
        expires: 1
    });
};

export const getToken = () => Cookies.get('token');
export const getRefreshToken = () => Cookies.get('refreshToken');
