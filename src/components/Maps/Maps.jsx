import React from "react";
import Style from './Maps.module.css'
import Section from "./../Section/Section";

const Maps = (props) => {
    return (
        <div className={Style.mapPage}>
            <Section content={'map'} title={'Basic map'}/>
        </div>
    );
};

export default Maps;
