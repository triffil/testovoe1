import React from "react";
import {NavLink} from "react-router-dom";


const HeaderSystem = (props) => {
    return (
        <ul className="pagesLeftSection">
            <li className="navItem">
                <NavLink to='/activity' >

                    <p>Activity</p>
                </NavLink>
            </li>
            <li className="navItem">
                <NavLink to='/map'>
                    {/*<img src="./img/activity.svg" alt="Activity">*/}
                    <p>Map</p>
                </NavLink>
            </li>
            <li className="navItem">
                <NavLink to='/timer'>
                    {/*<img src="./img/activity.svg" alt="Activity">*/}
                    <p>Timer</p>
                </NavLink>
            </li>
        </ul>
    );
};

export default HeaderSystem;
