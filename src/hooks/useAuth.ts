import { useMutation, useQuery } from '@tanstack/react-query';

import type { ILoginBody } from '@/api/auth/types';
import { Login, GetUser } from '@/api/auth/login';
import { errorCallback } from '@/utils/errorReq';
import { setAuthTokens } from '@/utils/storage';

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (data: ILoginBody) => Login(data),
        onSuccess: (result) => {
            if (result.status === 200) {
                setAuthTokens(result.data);
            }
        },
        onError: errorCallback
    });
};

export function useGetProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn: GetUser
    });
}
