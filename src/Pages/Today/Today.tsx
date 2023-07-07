import React from 'react';
import s from './Today.module.scss';

const data = [
    {length: 15, type: 'мин', name: 'Название события', id: 1, time: '14:00'},
    {length: 45, type: 'мин', name: 'Название события', id: 2, time: '14:00'},
    {length: 2, type: 'часа', name: 'Название события', id: 3, time: '14:00'},
    {length: 2, type: 'часа', name: 'Название события', id: 4, time: '14:00'},
]

const eventItems = data.map(e => <div style={{color:'black'}}>{e.name}</div>)

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
                </div>
            </div>
        </div>
    );
};

export default Today;