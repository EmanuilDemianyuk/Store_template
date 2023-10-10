import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE__URL__API } from '../../constants/urlAPI';
import { IProduct } from '../../types/products.type';


export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({baseUrl: BASE__URL__API}),
    endpoints: build => ({
        getTopProducts: build.query<IProduct[], number>({query: (minRating) => `?rating=${minRating}`}),
        getProducts: build.query<IProduct[], string>({query: (type: string) => type})
    })
})


export const { useGetProductsQuery, useGetTopProductsQuery } = productApi;