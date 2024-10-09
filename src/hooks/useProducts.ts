'use client';

import type { ProductFilterBody } from '@/api/products/types';

import { queryOptions, useQuery } from '@tanstack/react-query';

import {
    GetAllProducts,
    GetProductById,
    GetFilteredProducts,
    GetSearchedProducts
} from '@/api/products';

const filterQuery = (params: ProductFilterBody) =>
    queryOptions({
        queryKey: ['Products', 'Filtered', params],
        queryFn: () => GetFilteredProducts(params)
    });

export const useGetAllProducts = () => {
    return useQuery({
        queryKey: ['Products', 'ProductList'],
        queryFn: GetAllProducts
    });
};

export const useProductById = (id: number) => {
    return useQuery({
        queryKey: ['Products', 'Filtered'],
        queryFn: () => GetProductById(id),
        enabled: !!id
    });
};

export const useGetFilteredProducts = (filter: ProductFilterBody) => {
    return useQuery(filterQuery(filter));
};

export const useGetSearchedProducts = (query: string) => {
    return useQuery({
        queryKey: ['Products', 'Searched'],
        queryFn: () => GetSearchedProducts(query),
        enabled: !!query
    });
};
