import React from "react";
import PostContent from "./PostContent/PostContent";
import PostComment from "./PostComment/PostComment";
import Style from './OpenedPost.module.css'

const OpenedPost = (props) => {
    return (
        <div className={`${Style.openedPost} ${Style.post}`}>
            <PostContent />
            <PostComment />
        </div>
    );
};

export default OpenedPost;
