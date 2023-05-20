import React from "react";
import time from './../../../../img/time.svg'
import arrowDown from './../../../../img/arrowDown.svg'
import Style from './ClosedPost.module.css'
import opStyle from './../OpenedPost/OpenedPost.module.css'
const ClosedPost = (props) => {
    return (
        <div className={`${Style.closedPost} ${opStyle.post}`}>
            <div>
                <p>{props.name}</p>
            </div>
            <div className={Style.closedPostInfo}>
                <img src={time} alt=""></img>
                <p>{props.timesAgo} minutes ago</p>
                <img src={arrowDown} alt=""></img>
            </div>
        </div>
    );
};

export default ClosedPost;
