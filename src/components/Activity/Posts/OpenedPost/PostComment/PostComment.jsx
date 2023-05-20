import React from "react";
import comment from './../../../../../img/comment.svg'
import views from './../../../../../img/views.svg'
import Style from './PostComment.module.css'
const PostComment = (props) => {
    return (
        <div>
            <div className={Style.postCommentAuthor}>
                <img src={comment} alt="Comment Image" width="24px" height="24px"></img>
                <p><span>Jason Anderson</span> commented:</p>
            </div>
            <div className={Style.postCommentContent}>
                <p className={Style.postCommentBody}>Don’t sit and wait. Get out there, feel life.
                    Touch the sun, and immerse in the sea. Keep love in your heart.
                    A life without it is like a sunless garden when the flowers are dead.
                    Because summer is passion, memories, light breeze, the sun that appears on the skin
                    and
                    caresses the
                    face.
                </p>
                <p className={Style.postCommentInfo}>– Jason, 10:30 am</p>
            </div>
            <div className={Style.postStatistics}>
                <div className={Style.postViews}>
                    <img src={views} alt="Views" width="24px"
                         height="24px"></img>
                    <p>432</p>
                </div>
                <div className={Style.postComments}>
                    <img src={comment} alt="Views" width="24px"
                         height="24px"></img>
                    <p>47</p>
                </div>
            </div>
        </div>
    );
};

export default PostComment;
