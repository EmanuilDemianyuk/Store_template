import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE__URL__USER } from '../../constants/urlAPI';
import { ILoginUser, IUser } from '../../typesOrInterface/interface';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({baseUrl: BASE__URL__USER}),
    tagTypes: ["user"],
    endpoints: build => ({
        verificationUser: build.mutation<ILoginUser, Partial<ILoginUser>>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        setUser: build.mutation<IUser, string>({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        updateUser: build.mutation<IUser, string>({
            query: (payload) => ({
                url: '/',
                method: 'PUT',
                body: payload,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        deleteUser: build.mutation<IUser, string>({
            query: (payload) => ({
                url: '/',
                method: 'DELETE',
                body: payload,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
    })
})

export const { useVerificationUserMutation, 
               useSetUserMutation,
               useUpdateUserMutation,
               useDeleteUserMutation } = usersApi;

