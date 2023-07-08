import React from 'react';
import Header from "../../Components/Header/Header";
import s from './Profile.module.scss'
import {Routes, Route} from "react-router-dom";
import Today from "../Today/Today";

const Profile = () => {
    return (
        <div className={'container'}>
            <Header/>
            <div className={s.content}>
                <Routes>
                    <Route element={<Today/>} path={'/today/*'}/>
                </Routes>
            </div>
        </div>
    );
};

export default Profile;