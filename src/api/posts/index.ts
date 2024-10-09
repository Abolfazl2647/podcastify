import { IPostListResponse } from './types';

import axios from '@/service/axios';

export const GetAllPosts = async () => {
    const result = await axios.get<IPostListResponse>('https://dummyjson.com/posts');

    return result.data;
};
