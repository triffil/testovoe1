import React from "react";
import YandexMap from "../../Maps/YandexMap/YandexMap";
import Style from "../SectionContent/SectionContent.module.css"
import Timer from "../../Timer/Timer";


const SectionContent = (props) => {


    if (props.content === 'map') {
        return (
            <div id="map" className={Style.map}>
                <YandexMap />
            </div>
        )
    } else if (props.content === 'timer') {
        return (
            <div id="timer" className={Style.timer}>
                <Timer />
            </div>
        )
    }
};

export default SectionContent;
