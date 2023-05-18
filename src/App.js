import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Activity from "./components/Activity/Activity";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/Maps";
import Time from "./components/Time/Time";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/activity' element={<Activity />}/>
                        <Route path='/map' element={<Maps />}/>
                        <Route path='/timer' element={<Time />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
