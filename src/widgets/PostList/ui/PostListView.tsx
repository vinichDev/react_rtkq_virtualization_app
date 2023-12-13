import React, {FC} from "react";
import {IPost} from "entities/post";
import {List} from "antd";
import PostItem from "entities/post/ui/PostItem/PostItem";
import {Loader} from "shared/ui";

interface IProps {
    posts: IPost[] | undefined;
    isLoading: boolean;
    isFetching: boolean;
}

const PostListView: FC<IProps> = ({posts, isLoading, isFetching}) => {
    return (
        <List
            bordered
            dataSource={posts}
            size="large"
            itemLayout="horizontal"
            renderItem={(item) => (
                <PostItem
                    {...item}
                />
            )}
            loading={isLoading}
            footer={isFetching ? <Loader/> : null}
        />
    );
};

export default PostListView;
