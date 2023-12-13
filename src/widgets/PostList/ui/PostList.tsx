import React, {useEffect, useState} from "react";
import {postLimit, useFetchPostsQuery} from "entities/post";
import PostListView from "./PostListView";

const PostList = () => {
    const [offset, setOffset] = useState(0);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState(true);

    const {data = {posts: [], total: postLimit + 1}, isLoading, isFetching, refetch} = useFetchPostsQuery({
            limit: postLimit,
            start: offset,
        },
    );
    const {posts, total} = data;

    const scrollHandler = (): void => {
        if (
            !isLoadingMore && canLoadMore &&
            document.documentElement.scrollHeight -
            document.documentElement.scrollTop -
            window.innerHeight <
            50
        ) {
            setIsLoadingMore(true);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);

        return () => {
            document.removeEventListener("scroll", scrollHandler);
        }

    }, []);

    useEffect(() => {
        if (canLoadMore && isLoadingMore) {
            setOffset(state => state + postLimit);
        }
    }, [isLoadingMore]);

    useEffect(() => {
        setIsLoadingMore(false);
    }, [posts]);

    useEffect(() => {
        if (posts.length !== total) {
            refetch();
        } else {
            setCanLoadMore(false);
        }
    }, [offset])

    return (
        <PostListView
            posts={posts}
            isLoading={isLoading}
            isFetching={isFetching}
        />
    );
};

export default PostList;