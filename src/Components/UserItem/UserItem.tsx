import React from 'react';
import s from './UserItem.module.scss';

const UserItem = (props) => {
    return (
        <div className={s.u_cont}>
            <img src={props.img} alt="user image"/>
            <span>{props.name}</span>
        </div>
    );
};

export default UserItem;