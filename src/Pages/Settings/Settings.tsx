import React from 'react';
import s from './Settings.module.scss';
import fileImg from '../../assets/e_mater.svg';
import SettingItem from "../../Components/SettingItem/SettingItem";

const Settings = () => {
    return (
        <div className={s.cont}>
            <div className={s.title}>Настройки</div>
            <div className={s.cont_i}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
                    <SettingItem title={'фон заставки'} sup={'Текст для экрана заставки'}
                                 place={'Основной текст для заставки'}/>
                    <SettingItem title={'фон входа в сеть'} sup={'Текст для экрана входа в сеть'}
                                 place={'Основной текст для заставки после входа в сеть'}/>
                </div>
                <div className={s.line}></div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
                    <SettingItem title={'фон заставки / eng'} sup={'Текст для экрана заставки'}
                                 place={'Основной текст для заставки'}/>
                    <SettingItem title={'фон входа в сеть / eng'} sup={'Текст для экрана входа в сеть / eng'}
                                 place={'Основной текст для заставки после входа в сет'}/>
                </div>
            </div>
        </div>
    );
};

export default Settings;