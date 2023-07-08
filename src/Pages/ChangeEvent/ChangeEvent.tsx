import React from 'react';
import s from './ChangeEvent.module.scss';
import e_data from '../../assets/e_data.svg';
import e_time from '../../assets/e_time.svg';
import e_mat from '../../assets/e_mater.svg';
import e_per from '../../assets/e_period.svg';
import e_users from '../../assets/clients.svg';
import ava from '../../assets/ava_uu.png';
import UserItem from "../../Components/UserItem/UserItem";

const data = [
    {img: ava, name: 'Иван Шишкин', id: 1},
    {img: ava, name: 'Иван Шишкин', id: 2},
    {img: ava, name: 'Иван Шишкин', id: 3},
]

const userItems = data.map(u => <UserItem img={u.img} name={u.name}/>)


const ChangeEvent = (props) => {
    return (
        <div className={s.event_container}>
            <div className={s.title}>Название события</div>
            <div className={s.sup}>
                Прежде всего, высокотехнологичная концепция общественного уклада создаёт предпосылки для поэтапного и
                последовательного развития общества!
            </div>
            <div className={s.bb_gradient}/>
            <div className={s.event_info}>
                <div className={s.about_event}>
                    <div className={s.data_day}>
                        <div className={s.data}>
                            <div className={s.data_title}>
                                <img src={e_data} alt="data"/>
                                Дата
                            </div>
                            <div className={s.data_picker}>
                                <input type="date"/>
                            </div>
                        </div>
                        <div className={s.data}>
                            <div className={s.data_title}>
                                <img src={e_time} alt="time"/>
                                Время
                            </div>
                            <div className={s.data_picker} style={{width: '88px'}}>
                                <input type="time"/>
                            </div>
                        </div>
                    </div>
                    <div className={s.materials}>
                        <div className={s.mat_title}>
                            <img src={e_mat} alt="material icon"/>
                            Материалы
                        </div>
                        <span>доступ.pdf</span>
                    </div>
                    <div className={s.materials} style={{borderBottom: '0'}}>
                        <div className={s.mat_title}>
                            <img src={e_per} alt="material icon"/>
                            Периоды
                        </div>
                        <select>
                            <option>1 раз</option>
                            <option>2 раза</option>
                        </select>
                    </div>
                </div>
                <div className={s.clients}>
                    <div className={s.title}>
                        <img src={e_users} alt="users icon"/>
                        Список клиентов
                    </div>
                    <div className={s.user_items}>
                        {userItems}
                    </div>
                    <div className={s.add_btn}>+</div>
                </div>
            </div>
            <div className={s.btn_blue}>Сохранить изменения</div>
        </div>
    );
};

export default ChangeEvent;