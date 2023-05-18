import React from "react";
import HeaderSystem from "./HeaderSystem/HeaderSystem";
import HeaderPersonal from "./HeaderPersonal/HeaderPersonal";



const Header = (props) => {
    return (
        <div className="wrapper headerWrapper">
            <HeaderSystem />
            <HeaderPersonal />
        </div>
    );
};

export default Header;
