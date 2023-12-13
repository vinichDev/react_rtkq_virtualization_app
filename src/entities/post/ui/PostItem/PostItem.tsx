import {List} from "antd";
import {FC} from "react";
import {Link} from "react-router-dom";
import cls from './PostItem.module.scss'
import {IPost} from "../../model";

interface IProps extends IPost {}

const PostItem: FC<IProps> = ({id, title, body}) => {

    return (
        <List.Item className={cls.itemWrapper}>
            <div>{id}</div>
            <div className={cls.itemTextBlock}>
                <span className={cls.itemTitle}>
                    {title}
                </span>
                {body}
            </div>
            <Link to={id.toString()}>Просмотр</Link>
        </List.Item>
    );
};

export default PostItem;