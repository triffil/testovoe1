import React from "react";
import avatar from './../../../../img/avatar.jpg'
import telegram from './../../../../img/telegram.svg'
import hh from './../../../../img/hh.svg'
import twitter from './../../../../img/twitter.svg'
import Style from './UserInfo.module.css'
const UserInfo = (props) => {
    return (
        <div className={`${Style.userInfo} ${Style.userNavItem}`}>
            <div className={Style.userInfoBody}>
                <img src={avatar} alt=""></img>
                <p className={Style.userName}>Hanna Dorman</p>
                <p className={Style.userPosition}>UX/UI designer</p>
            </div>
            <div className={Style.userInfoSocial}>
                <a href="#">
                    <img src={telegram} alt="telegram"></img>
                </a>
                <a href="#">
                    <img src={hh} alt="hh"></img>
                </a>
                <a href="#">
                    <img src={twitter} alt="twitter"></img>
                </a>
            </div>
        </div>
    );
};

export default UserInfo;
