import React from 'react';
import loader from './../../img/loadergif.gif'
import Style from './Loader.module.css'


const Loader = (props) => {
    return (
        <div className={Style.loader}>
            <img src={loader} alt=""/>
        </div>

    );
}

export default Loader;