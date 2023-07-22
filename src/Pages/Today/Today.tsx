import React, {useEffect, useState} from "react";
import s from "./Today.module.scss";
import EventItem from "../../Components/EventItem/EventItem";
import {Routes, Route, Link} from "react-router-dom";
import ChangeEvent from "../ChangeEvent/ChangeEvent";
import AddEvent from "../AddEvent/AddEvent";
import Api from "../../Api/Api";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Today = () => {
    const [todayArr, setTodayArr] = useState<any[]>([]);

    const token = useTypedSelector(state => state.user.token);
    const [deviceWidth, setDeviceWidth] = useState();

    useEffect(() => {
        let aviableW = window.innerWidth;
        setDeviceWidth(aviableW);
        Api.allNotifications(token).then(res => {
            setTodayArr(res.data.notifications);
            console.log(res.data.notifications);
        });
    }, [setDeviceWidth]);

    if (deviceWidth >= 480) {
        return (
            <div className={s.content}>
                <div className={s.cont_i}>
                    <div className={s.sidebar}>
                        <div className={s.title}>
                            <div className={s.line_date}>
                                Расписание <span className={s.date}>8 июля</span>
                            </div>
                            событий на сегодня
                        </div>
                        <div className={s.container_event}>
                            <EventItem
                                // key={index}
                                id={1}
                                length={15}
                                type={"мин"}
                                name={'Name'}
                                time={"14:15 - 15:00"}
                            />
                            {todayArr.map((el, index) => {
                                if (el.day == 1) {
                                    return (
                                        <EventItem
                                            key={index}
                                            id={el.id}
                                            length={15}
                                            type={"мин"}
                                            name={el.tittle}
                                            time={"14:15 - 15:00"}
                                        />
                                    );
                                }
                            })}
                        </div>
                        <Link to={"/profile/today/add"} className={s.btn_blue}>
                            Добавить событие
                        </Link>
                    </div>
                    <div className={s.page_content}>
                        <Routes>
                            <Route path={"/:eventId"} element={<ChangeEvent/>}/>
                            <Route path={"/add"} element={<AddEvent/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={s.content}>
                <div className={s.cont_i}>
                    <div className={s.page_content}>
                        <Routes>
                            <Route path={'/'} element={<div className={s.sidebar}>
                                <div className={s.title}>
                                    <div className={s.line_date}>
                                        Расписание <span className={s.date}>8 июля</span>
                                    </div>
                                    событий на сегодня
                                </div>
                                <div className={s.container_event}>
                                    <EventItem
                                        // key={index}
                                        id={1}
                                        length={15}
                                        type={"мин"}
                                        name={'Name'}
                                        time={"14:15 - 15:00"}
                                    />
                                    {todayArr.map((el, index) => {
                                        if (el.day == 1) {
                                            return (
                                                <EventItem
                                                    key={index}
                                                    id={el.id}
                                                    length={15}
                                                    type={"мин"}
                                                    name={el.tittle}
                                                    time={"14:15 - 15:00"}
                                                />
                                            );
                                        }
                                    })}
                                </div>
                                <Link to={"/profile/today/add"} className={s.btn_blue}>
                                    Добавить событие
                                </Link>
                            </div>}/>
                            <Route path={"/:eventId"} element={<ChangeEvent/>}/>
                            <Route path={"/add"} element={<AddEvent/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }


};

export default Today;
