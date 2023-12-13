import React from "react";
import PostCard from "entities/post/ui/PostCard/PostCard";
import GoBackButton from "../../../shared/ui/GoBackButton/GoBackButton";

const PostPage = () => {


    return (
        <div>
            <GoBackButton/>
            <PostCard/>
        </div>
    );
};

export default PostPage;
