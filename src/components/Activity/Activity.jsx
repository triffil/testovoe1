import React from "react";
import Posts from "./Posts/Posts";
import UserNav from "./UserNav/UserNav";
import Style from './Activity.module.css'

const Activity = (props) => {
    return (
        <div className={Style.activityPage}>
            <Posts />
            <UserNav />
        </div>
    );
};

export default Activity;
