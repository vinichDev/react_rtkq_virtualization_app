import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {baseApi} from 'shared/api'
import {postsApi} from "entities/post";

const rootReducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
});