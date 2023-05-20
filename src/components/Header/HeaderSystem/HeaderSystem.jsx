import React from "react";
import {NavLink} from "react-router-dom";
import activity from './../../../img/activity.svg';
import map from './../../../img/map.svg';
import time from './../../../img/time.svg';
import Style from './../Header.module.css';

const HeaderSystem = (props) => {
    return (
        <ul className={Style.pagesLeftSection}>
            <li className={Style.navItem}>
                <NavLink to='/activity' id="activity">
                    <img src={activity} alt="activity"></img>
                    <p>Activity</p>
                </NavLink>
            </li>
            <li className={Style.navItem}>
                <NavLink to='/map' id="maps">
                    <img src={map} alt="map"></img>
                    <p>Map</p>
                </NavLink>
            </li>
            <li className={Style.navItem}>
                <NavLink to='/timer' id="time">
                    <img src={time} alt="time"></img>
                    <p>Timer</p>
                </NavLink>
            </li>
        </ul>
    );
};

export default HeaderSystem;
