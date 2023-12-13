import {Card} from "antd";
import {useFetchPostQuery} from "../../api";

const PostCard = () => {
    const postId = +window.location.pathname.substring(1);
    const {data: post} = useFetchPostQuery({id: postId})

    return (
        <Card title={post?.title} bordered={false}>
            <p>{post?.body}</p>
        </Card>
    );
};

export default PostCard;