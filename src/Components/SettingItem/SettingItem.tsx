import React from 'react';
import s from './SettingItem.module.scss';
import fileImg from "../../assets/e_mater.svg";


const SettingItem = (props) => {
    return (
        <div className={s.set_item}>
            <div className={s.header}>
                <div className={s.title}>
                    <img src={fileImg} alt="file icon"/>
                    {/*фон заставки*/}
                    {props.title}
                </div>
                <div className={s.file}>
                    фон1.jpg
                </div>
            </div>
            <div className={s.main}>
                <div className={s.title}>
                    {/*Текст для экрана заставки*/}
                    {props.sup}
                </div>
                <input type="text" placeholder={'Заголовок'}/>
                <textarea
                    // placeholder={'Основной текст для заставки'}
                    placeholder={props.place}
                />
            </div>
        </div>
    );
};

export default SettingItem;