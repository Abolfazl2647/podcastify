export interface ILoginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string; // JWT accessToken (for backward compatibility) in response and cookies
    refreshToken: string; // refreshToken in response and cookies
}

export interface ILoginBody {
    username: string;
    password: string;
    expiresInMins: number;
}

export interface IRefreshTokenReponse {
    accessToken: string; // JWT accessToken (for backward compatibility) in response and cookies
    refreshToken: string; // refreshToken in response and cookies
}

export interface IRefreshTokenBody {
    refreshToken: string;
    expiresInMins: number;
}

export interface IUserResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}
