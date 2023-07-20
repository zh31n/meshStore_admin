import React from 'react';
import s from './UserItem.module.scss';
import trash from '../../assets/white_trash.svg';

const UserItem = ({img,name}) => {
    return (
        <div className={s.contant}>
            <div className={s.u_cont}>
                <img src={img} alt="user image"/>
                <span>{name}</span>
            </div>
            <div className={s.trash}>
                <img src={trash} alt=""/>
            </div>
        </div>

    );
};

export default UserItem;