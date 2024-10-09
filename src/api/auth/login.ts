import { AxiosResponse } from 'axios';
import axios from '@/service/axios';

import type {
    IRefreshTokenReponse,
    IRefreshTokenBody,
    ILoginBody,
    ILoginResponse,
    IUserResponse
} from './types';

export const GetRefreshToken = async (token: string) => {
    return await axios.post<
        IRefreshTokenReponse,
        AxiosResponse<IRefreshTokenReponse, IRefreshTokenBody>,
        IRefreshTokenBody
    >('https://dummyjson.com/auth/refresh', {
        refreshToken: token,
        expiresInMins: 720
    });
};

export const Login = async ({ username, password, expiresInMins }: ILoginBody) => {
    return await axios.post<ILoginResponse, AxiosResponse<ILoginResponse, ILoginBody>, ILoginBody>(
        'https://dummyjson.com/auth/login',
        {
            username,
            password,
            expiresInMins
        }
    );
};

export const GetUser = () => axios.get<IUserResponse>('https://dummyjson.com/auth/me');
