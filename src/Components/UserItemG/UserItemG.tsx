import React from 'react';
import s from './UserItemG.module.scss';
import btn from '../../assets/More_btnsvg.svg'

interface Props {
    name: string
    id: number
    image: string
}

const UserItemG = ({name, id, image}:Props) => {
    return (
        <div className={s.cont}>
            <div className={s.info}>
                <img className={s.image} src={image} alt=""/>
                <span>{name}</span>
            </div>
            <img src={btn} alt=""/>
        </div>
    );
};

export default UserItemG;