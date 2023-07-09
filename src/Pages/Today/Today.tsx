import React from 'react';
import s from './Today.module.scss';
import EventItem from "../../Components/EventItem/EventItem";
import {Routes, Route, Link} from 'react-router-dom';
import ChangeEvent from "../ChangeEvent/ChangeEvent";
import AddEvent from "../AddEvent/AddEvent";

const data = [
    {length: 15, type: 'мин', name: 'Название события', id: 1, time: '14:00'},
    {length: 45, type: 'мин', name: 'Название события', id: 2, time: '14:00'},
    {length: 2, type: 'часа', name: 'Название события', id: 3, time: '14:00'},
    {length: 2, type: 'часа', name: 'Название события', id: 4, time: '14:00'},
]

const eventItems = data.map(e => <EventItem name={e.name} time={e.time} length={e.length} type={e.type} id={e.id}/>)

const Today = () => {
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
                        {eventItems}
                    </div>
                    <Link to={'/profile/today/add'} className={s.btn_blue}>Добавить событие</Link>
                </div>
                <div className={s.page_content}>
                    <Routes>
                        <Route path={'/:eventId'} element={<ChangeEvent/>} />
                        <Route path={'/add'} element={<AddEvent/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Today;