import React from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import SectionContent from "./SectionContent/SectionContent";
import Style from "./Section.module.css"


const Section = (props) => {
    return (
        <div className={Style.section}>
            <SectionTitle title={props.title}/>
            <SectionContent content={props.content} />
        </div>
    );
};

export default Section;
