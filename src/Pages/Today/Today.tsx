import {useEffect, useState} from "react";
import s from "./Today.module.scss";
import EventItem from "../../Components/EventItem/EventItem";
import {Routes, Route, Link} from "react-router-dom";
import ChangeEvent from "../ChangeEvent/ChangeEvent";
import AddEvent from "../AddEvent/AddEvent";
import Api from "../../Api/Api";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface notifications {
    date: string;
    day: number;
    len: number;
    notifications: any[];
}

const Today = () => {
    const [todayArr, setTodayArr] = useState<notifications>({
        date: "",
        day: 2,
        len: 2,
        notifications: [],
    });

    const role = useTypedSelector(state => state.user.role);
    const token = useTypedSelector(state => state.user.token);
    const [deviceWidth, setDeviceWidth] = useState<number>(2000);
    const [networks, setNetwork] = useState<any[]>([]);
    const [currentNetwork, setCurrentsNetwork] = useState<number>(1);

    useEffect(() => {
        let aviableW = window.innerWidth;
        setDeviceWidth(aviableW);
    }, [setDeviceWidth]);

    useEffect(() => {
        Api.allNotifications(token, currentNetwork).then(res => {
            setTodayArr(res.data.notifications[0]);
        });
    }, [currentNetwork]);

    useEffect(() => {
        Api.getNetworks(token).then(res => {
            setNetwork(res.data.networks);
            res.data.networks.lenght !== 0 &&
            setCurrentsNetwork(res.data.networks[0].id);
        });
    }, []);

    if (deviceWidth >= 480) {
        return (
            <div className={s.content}>
                <div className={s.cont_i}>
                    <div className={s.sidebar}>
                        <div className={s.title}>
                            <div className={s.line_date}>
                                Расписание <span className={s.date}>{todayArr.date}</span>
                            </div>
                            событий на сегодня
                            {role === 2 && (
                                <select
                                    className={s.select}
                                    value={currentNetwork}
                                    onChange={e => {
                                        setCurrentsNetwork(Number(e.target.value));
                                    }}
                                >
                                    {networks.map(el => (
                                        <option value={el.id}>{el.name}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <div className={s.container_event}>
                            {todayArr.notifications.map((el, index) => (
                                <EventItem
                                    key={index}
                                    id={el.id}
                                    length={el.length.length}
                                    type={el.length.measure}
                                    name={el.title}
                                    start={el.start}
                                    finish={el.finish}
                                />
                            ))}
                        </div>
                        <Link to={"/profile/today/add"} className={s.btn_blue}>Добавить событие</Link>
                    </div>
                    <div className={s.page_content}>
                        <Routes>
                            <Route
                                path={"/:eventId"}
                                element={<ChangeEvent setNewArr={setTodayArr} id={currentNetwork}  />}
                            />
                            <Route
                                path={"/add"}
                                element={
                                    <AddEvent
                                        setNewArr={setTodayArr}
                                        currentNetwork={currentNetwork}
                                    />
                                }
                            />
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
                            <Route
                                path={"/"}
                                element={
                                    <div className={s.sidebar}>
                                        <div className={s.title}>
                                            <div className={s.line_date}>
                                                Расписание{" "}
                                                <span className={s.date}>{todayArr.date}</span>
                                            </div>
                                            событий на сегодня
                                        </div>
                                        <div className={s.container_event}>
                                            {todayArr.notifications.map((el, index) => (
                                                <EventItem
                                                    key={index}
                                                    id={el.id}
                                                    length={el.length.length}
                                                    type={el.length.measure}
                                                    name={el.title}
                                                    start={el.start}
                                                    finish={el.finish}
                                                />
                                            ))}
                                        </div>
                                        <Link to={"/profile/today/add"} className={s.btn_blue}>
                                            Добавить событие
                                        </Link>
                                    </div>
                                }
                            />
                            <Route
                                path={"/:eventId"}
                                element={<ChangeEvent setNewArr={setTodayArr}/>}
                            />
                            <Route
                                path={"/add"}
                                element={
                                    <AddEvent
                                        currentNetwork={currentNetwork}
                                        setNewArr={setTodayArr}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
};

export default Today;
