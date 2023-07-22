import Header from "../../Components/Header/Header";
import s from "./Profile.module.scss";
import {Routes, Route} from "react-router-dom";
import Today from "../Today/Today";
import Users from "../Users/Users";
import Settings from "../Settings/Settings";
import Calendar from "../Calendar/Calendar";
import MobileNav from "../../Components/MobileNav/MobileNav";

const Profile = () => {
    return (
        <div className={"container"}>
            <Header/>
            <div className={s.content}>
                <Routes>
                    <Route element={<Today/>} path={"/today/*"}/>
                    <Route element={<Users/>} path={"/clients/*"}/>
                    <Route element={<Settings/>} path={"/settings"}/>
                    <Route element={<Calendar/>} path={"/calendar"}/>
                </Routes>
            </div>
            <MobileNav/>
        </div>
    );
};

export default Profile;
