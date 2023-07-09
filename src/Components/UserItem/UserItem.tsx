import React from 'react';
import s from './UserItem.module.scss';
import trash from '../../assets/white_trash.svg';

const UserItem = (props) => {
    return (
        <div className={s.contant}>
            <div className={s.u_cont}>
                <img src={props.img} alt="user image"/>
                <span>{props.name}</span>
            </div>
            <div className={s.trash}>
                <img src={trash} alt=""/>
            </div>
        </div>

    );
};

export default UserItem;