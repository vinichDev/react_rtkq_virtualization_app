import React, {useEffect, useState} from "react";
import {postLimit, postsCount, useFetchPostsQuery} from "entities/post";
import PostListView from "./PostListView";

const PostList = () => {
    const [currentPostStart, setCurrentPostStart] = useState(0);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const [loadMore, setLoadMore] = useState(false);

    const {data: posts, isLoading, isFetching} = useFetchPostsQuery({
        limit: postLimit,
        start: currentPostStart,
    });

    useEffect(() => {
        if (canLoadMore && loadMore) {
            setCurrentPostStart(posts?.length || 0);
        }
    }, [loadMore]);

    useEffect(() => {
        setLoadMore(false);
        if (Array.isArray(posts) && posts.length === postsCount) {
            setCanLoadMore(false);
        }
    }, [posts]);

    useEffect(() => {
        if (canLoadMore) {
            document.addEventListener("scroll", scrollHandler);
        } else {
            document.removeEventListener("scroll", scrollHandler);
        }
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        }

    }, [canLoadMore]);
    const scrollHandler = (): void => {
        if (
            document.documentElement.scrollHeight -
            document.documentElement.scrollTop -
            window.innerHeight <
            50
        ) {
            setLoadMore(true)
        }
    };

    return (
        <PostListView
            posts={posts}
            isLoading={isLoading}
            isFetching={isFetching}
        />
    );
};

export default PostList;