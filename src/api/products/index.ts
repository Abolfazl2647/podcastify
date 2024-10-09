import {
    IProductResponse,
    IProductsSearchResponse,
    IProductFilteredResponse,
    ProductFilterBody
} from './types';

import axios from '@/service/axios';

export const GetAllProducts = async () => {
    const result = await axios.get<IProductResponse>('https://dummyjson.com/products');

    return result.data;
};

export const GetProductById = async (id: number) => {
    const result = await axios.get<IProductResponse>(`https://dummyjson.com/products/${id}`);

    return result.data;
};

// TODO: its better to create a function and generate query for us insted of using if else statements
export const GetFilteredProducts = async ({ limit, skip, select }: ProductFilterBody) => {
    let query = '';

    if (limit) query += `limit=${limit}`;
    if (skip) {
        if (limit) {
            query += `&skip=${skip}`;
        } else {
            query += `skip=${skip}`;
        }
    }

    if (select) {
        if (limit | skip) {
            query += `&select=${select.join(',')}`;
        } else {
            query += `select=${select.join(',')}`;
        }
    }

    const result = await axios.get<IProductFilteredResponse>(
        `https://dummyjson.com/products?${query}`
    );

    return result.data;
};

export const GetSearchedProducts = async (query: string) => {
    const result = await axios.get<IProductsSearchResponse>(
        `https://dummyjson.com/products/search?q=${query}`
    );

    return result.data;
};
