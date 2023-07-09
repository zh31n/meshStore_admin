import React from 'react';
import s from './Users.module.scss';
import i_search from '../../assets/Search.svg';
import ava_img from '../../assets/ava_uu.png';
import UserItemG from "../../Components/UserItemG/UserItemG";

const Users = (props: any) => {

    const data = {
        header: [
            {name: 'Сотрудники'},
            {name: 'Клиенты'},
        ],
        users: [
            {name: 'Фёдор Шишкин', id: 1, image: ava_img},
            {name: 'Фёдор Шишкин', id: 1, image: ava_img},
            {name: 'Фёдор Шишкин', id: 1, image: ava_img},
            {name: 'Фёдор Шишкин', id: 1, image: ava_img},
            {name: 'Фёдор Шишкин', id: 1, image: ava_img},
        ]

    }


    const navItems = data.header.map(i => <div className={s.nav_item}>{i.name}</div>)
    const userItems = data.users.map(i => <UserItemG name={i.name} id={i.id} image={ava_img}/>)

    return (
        <>
            <div className={s.input_search}>
                <img src={i_search} alt="icon search"/>
                <input type="text" placeholder='Поиск по группам'/>
            </div>
            <div className={s.nav_users}>
                {navItems}
            </div>
            <div className={s.cont}>
                <div className={s.users}>
                    {userItems}
                </div>
                <div className={s.left}>

                </div>
            </div>
        </>
    );
};

export default Users;