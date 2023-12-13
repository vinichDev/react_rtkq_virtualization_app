import {baseApi} from "shared/api";
import {IPost, IPostQueryArgs, IPostsQueryArgs, postLimit, postsCount} from "../model";

export const postsApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchPosts: build.query<IPost[], IPostsQueryArgs>({
            query: ({start = 0, limit = postLimit}) => ({
                url: '/posts',
                params:
                    {
                        _limit: limit,
                        _start: start,
                    }
            }),
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
            merge: (currentCache, newItems, {arg}) => {
                console.log(arg.start)
                if (arg.start > 0) {
                    currentCache.push(...newItems)
                }
                return currentCache;
            },
            forceRefetch({ currentArg, previousArg }) {
                return previousArg?.start !== postsCount - postLimit;
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