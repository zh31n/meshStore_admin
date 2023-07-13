import React from 'react';
import s from './AddClient.module.scss';

const AddClient = (props: any) => {
    return (
        <div className={s.cont}>
            <div className={s.title}>Добавить нового клиента</div>
            <div className={s.inputs_cont}>
                <div className={s.inpt_cont}>
                    <div className={s.title}>Имя/ логин клиента*</div>
                    <input type="text" placeholder='Иван Иванович'/>
                </div>
                <div className={s.inpt_cont}>
                    <div className={s.title}>Номер телефона*</div>
                    <input type="number" placeholder='+ _-___-___-___'/>
                </div>
                <div className={s.inpt_cont}>
                    <div className={s.title}>Электронная почта*</div>
                    <input type="email" placeholder='test@mail.com'/>
                </div>
                <div className={s.inpt_cont}>
                    <div className={s.title}>Статус пользователя</div>
                    <select>
                        <option>Клиент</option>
                        <option>Администратор</option>
                        <option>Главный администратор</option>
                    </select>
                </div>
            </div>
            <div className={s.blue_btn}>Добавить пользователя</div>
        </div>
    );
};

export default AddClient;