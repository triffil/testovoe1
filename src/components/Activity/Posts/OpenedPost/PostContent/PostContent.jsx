import React from "react";
import bgImage from '../../../../../img/bgImage.jpg'
import Style from './PostContent.module.css'
const PostContent = (props) => {
    return (
        <div className={Style.postContent}>
            <img src={bgImage} alt=""></img>
        </div>
    );
};

export default PostContent;
