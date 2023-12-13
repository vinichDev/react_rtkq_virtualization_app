import {baseApi} from "shared/api";
import {IPost, IPostQueryArgs, IPostsQueryArgs, postLimit, postsCount} from "../model";

export const postsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchPosts: build.query<{ posts: IPost[], total: number }, IPostsQueryArgs>({
            query: ({start = 0, limit = postLimit}) => ({
                url: '/posts',
                params:
                    {
                        _limit: limit,
                        _start: start,
                    },

            }),
            transformResponse: (response: IPost[]) => {
                return {
                    posts: response,
                    total: postsCount,
                };
            },
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
            merge: (currentCache, newItems, {arg}) => {
                if (arg.start > 0) {
                    currentCache.posts.push(...newItems.posts)
                }
                return currentCache;
            },
        }),
        fetchPost: build.query<IPost, IPostQueryArgs>({
            query: ({id}) => ({
                url: `/posts/${id}`,
            }),
        }),
    })
})

export const {useFetchPostsQuery, useFetchPostQuery} = postsApi;