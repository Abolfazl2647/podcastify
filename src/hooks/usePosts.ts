import { useQuery, queryOptions } from '@tanstack/react-query';

import { GetAllPosts } from '@/api/posts';

const getAllPostQuqery = queryOptions({
    queryKey: ['all', 'posts'],
    queryFn: GetAllPosts
});

export function useGetAllPosts() {
    return useQuery(getAllPostQuqery);
}
