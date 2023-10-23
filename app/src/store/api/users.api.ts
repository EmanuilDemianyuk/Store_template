import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE__URL__USER } from '../../constants/urlAPI';
import { IUser } from '../../typesOrInterface/interface';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({baseUrl: BASE__URL__USER}),
    endpoints: build => ({
        getUser: build.query<IUser[], string>({query: (usersEmail) => usersEmail}),
        setUser: build.mutation<IUser, string>({
            query: (payload) => ({
                url: '/register',
                method: 'POST',
                body: payload,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        })
    })
})

export const { useGetUserQuery, useSetUserMutation } = usersApi;

