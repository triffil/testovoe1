import React from "react";
import arrowTop from './../../../../img/arrowTop.svg'
import profile from './../../../../img/myprofile.svg'
import balance from './../../../../img/balance.svg'
import connections from './../../../../img/connections.svg'
import friends from './../../../../img/friends.svg'
import events from './../../../../img/events.svg'
import settings from './../../../../img/settings.svg'
import Style from './Navigation.module.css'
const Navigation = (props) => {
    return (
        <nav className={`${Style.navigation} ${Style.userNavItem}`}>
            <div className={Style.navigationName}>
                <p>Navigation</p>
                <img src={arrowTop} alt="Arrow top"></img>
            </div>
            <ul className={Style.navigationMain}>
                <li className={Style.navigationListItem}>
                    <div className={Style.listItemName}>
                        <img src={profile} alt="My Profile"></img>
                        <p>My profile</p>
                    </div>
                    <div className={Style.listItemValue}></div>
                </li>
                <li className={Style.navigationListItem}>
                    <div className={Style.listItemName}>
                        <img src={balance} alt="Balance"></img>
                        <p>Balance</p>
                    </div>
                    <div className={Style.listItemValue}>$ 1,430</div>
                </li>
                <li className={Style.navigationListItem}>
                    <div className={Style.listItemName}>
                        <img src={connections} alt="Connections"></img>
                        <p>Connections</p>
                    </div>
                    <div className={`${Style.listItemValue} ${Style.redCircle}`}><p>29</p></div>
                </li>
                <li className={Style.navigationListItem}>
                    <div className={Style.listItemName}>
                        <img src={friends} alt="Friends"></img>
                        <p>Friends</p>
                    </div>
                    <div className={Style.listItemValue}></div>
                </li>
            </ul>
            <ul className={Style.navigationAdditional}>
                <li className={Style.navigationListItem}>
                    <div className={Style.listItemName}>
                        <img src={events} alt="Events"></img>
                        <p>Events</p>
                    </div>
                    <div className={`${Style.listItemValue} ${Style.greenCircle}`}>
                        <p>45</p>
                    </div>
                </li>
                <li className={Style.navigationListItem}>
                    <div className={Style.listItemName}>
                        <img src={settings} alt="Settings"></img>
                        <p>Account settings</p>
                    </div>
                    <div className={Style.listItemValue}></div>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
