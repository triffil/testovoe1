import React, {useState, useEffect} from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import loader from './../../../img/loadergif.gif'
import Loader from "../../Loader/Loader";

const YandexMap = (props) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);


    return (
        <div>
            {!isMapLoaded && <Loader />}
            <YMaps query={{apikey: '97dd3b24-06b7-44ea-9da6-b02fc07ccbd8'}}>
                <Map state={{ center: [56.73300256798184, 37.16403099999994], zoom: 15 }} width="100%"
                     height="480px"
                     onLoad={() => setIsMapLoaded(true)}
                     onError={(error) => <Loader />}>

                    <Placemark geometry={[56.73300256798184, 37.16403099999994]}/>
                </Map>
            </YMaps>
        </div>

    );
}

export default YandexMap;