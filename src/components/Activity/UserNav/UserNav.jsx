import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Navigation from "./Navigation/Navigation";
import AddNewPost from "./AddNewPost/AddNewPost";
import Style from './UserNav.module.css'

const UserNav = (props) => {
    return (
        <div className={Style.userNav}>
            <UserInfo />
            <Navigation />
            <AddNewPost />
        </div>
    );
};

export default UserNav;
