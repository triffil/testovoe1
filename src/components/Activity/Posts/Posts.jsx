import React from "react";
import OpenedPost from "./OpenedPost/OpenedPost";
import ClosedPost from "./ClosedPost/ClosedPost";
import Style from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={Style.posts}>
            <OpenedPost />
            <ClosedPost name={'Sunset Sunset Sunset'} timesAgo={53} />
            <ClosedPost name={'Morning of Siberia'} timesAgo={56}/>
        </div>
    );
};

export default Posts;
