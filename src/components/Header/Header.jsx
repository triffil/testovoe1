import React from "react";
import HeaderSystem from "./HeaderSystem/HeaderSystem";
import HeaderPersonal from "./HeaderPersonal/HeaderPersonal";
import Style from './Header.module.css'


const Header = (props) => {
    return (
        <div className={Style.header}>
            <div className={`${Style.headerWrapper} wrapper`}>
                <HeaderSystem />
                <HeaderPersonal />
            </div>
        </div>

    );
};

export default Header;
