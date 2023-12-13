import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {api} from "../model/";

export const baseQuery: BaseQueryFn = fetchBaseQuery({
    baseUrl: api.endpoint
})