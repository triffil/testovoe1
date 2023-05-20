import React from "react";
import {NavLink} from "react-router-dom";
import notes from './../../../img/notes.svg';
import friends from './../../../img/friends.svg';
import photos from './../../../img/photos.svg';
import settings from './../../../img/settings.svg';
import arrowDown from './../../../img/arrowDown.svg';
import Style from './../Header.module.css'


const HeaderPersonal = (props) => {
    return (
            <ul className={Style.pagesRightSection}>
                <li className={Style.navItem}>
                    <NavLink to="#">
                        <img src={notes} alt="Notes"></img>
                        <p>Notes</p>
                    </NavLink>
                </li>
                <li className={Style.navItem}>
                    <NavLink to="#">
                        <img src={friends} alt="Friends"></img>
                        <p>Friends</p>
                    </NavLink>
                </li>
                <li className={Style.navItem}>
                    <NavLink to="#">
                        <img src={photos} alt="Photos"></img>
                        <p>Photos</p>
                    </NavLink>
                </li>
                <li className={Style.navItem}>
                    <NavLink to="#">
                        <img src={settings} alt="Settings"></img>
                        <img src={arrowDown} alt="Arrow down"></img>
                    </NavLink>
                </li>
            </ul>
    );
};

export default HeaderPersonal;
