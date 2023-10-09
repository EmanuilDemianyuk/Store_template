import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE__URL__API } from '../../constants/urlAPI';
import { IProduct } from './products.type';


export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({baseUrl: BASE__URL__API}),
    endpoints: build => ({
        getProducts: build.query<IProduct[], string>({query: (type: string) => `produts/${type}`})
    })
})

export const { useGetProductsQuery } = productApi;