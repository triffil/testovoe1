import React from "react";
import blackArrowDown from '../../../img/blackArrowDown.svg'
import refresh from '../../../img/refresh.svg'
import close from '../../../img/close.svg'
import Style from './SectionTitle.module.css'

const SectionTitle = (props) => {
    return (
        <div className={Style.sectionTitle}>
            <p className={Style.sectionName}>{props.title}</p>
            <div className={Style.sectionActions}>
                <img src={blackArrowDown} alt="arrow down"></img>
                <img src={refresh} alt="refresh"></img>
                <img src={close} alt="close"></img>
            </div>
        </div>
    );
};

export default SectionTitle;
