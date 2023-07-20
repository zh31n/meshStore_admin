import React from 'react';
import s from './AddEvent.module.scss';
import trash from '../../assets/Trash.svg';
import calend from '../../assets/e_data.svg';
import upload from '../../assets/File_Upload.svg';
import e_users from "../../assets/clients.svg";
import ava from "../../assets/ava_uu.png";
import UserItem from "../../Components/UserItem/UserItem";
import {Link, NavLink} from "react-router-dom";

const data = [
    {img: ava, name: 'Иван Шишкин', id: 1},
    {img: ava, name: 'Иван Шишкин', id: 2},
    {img: ava, name: 'Иван Шишкин', id: 3},
]

const userItems = data.map(u => <UserItem img={u.img} name={u.name}/>)

const AddEvent = (props: any) => {
    return (
        <div>
            <div className={s.title}>
                Новое событие для расписания
                <img className={s.trash} src={trash} alt="trash icon"/>
            </div>
            <div className={s.content}>
                <div className={s.right}>
                    <div className={s.name_ev}>
                        <div className={s.title}>Название для события*</div>
                        <input type="text" placeholder='Введите своё название'/>
                    </div>
                    <div className={s.comm}>
                        <div className={s.title}>Добавьте комментарий*</div>
                        <textarea placeholder='Текст для сообщения'/>
                    </div>
                    <div className={s.date}>
                        <div className={s.title}>Время и дата события*</div>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <div className={s.timing}>
                                <input type="time"/>
                                -
                                <input type="time" style={{marginLeft: '5px'}}/>
                            </div>
                            <div className={s.timing}>
                                <input type="date"/>
                            </div>
                            <img style={{marginLeft: '10px'}} src={calend} alt="calendar icon"/>
                        </div>
                    </div>
                </div>
                <div className={s.left}>
                    <div className={s.materials}>
                        <div>
                            <div className={s.title}>Прикрепите материалы</div>
                            <span>По необходимости</span>
                        </div>
                        <img src={upload} alt=""/>
                        <input type="file" style={{display: 'none'}}/>
                    </div>
                    <div className={s.clients}>
                        <div className={s.title}>
                            <img src={e_users} alt="users icon"/>
                            Список клиентов
                        </div>
                        <div className={s.user_items}>
                            {userItems}
                        </div>
                        <NavLink to={'/profile/clients/add'} className={s.add_btn}>+</NavLink>
                    </div>
                </div>
            </div>
            <div className={s.blue_btn}>Добавить в расписание</div>
        </div>
    );
};

export default AddEvent;