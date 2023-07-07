import React, {useState} from 'react';
import s from './Login.module.css'
import logo from '../../assets/logo.svg'
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomInputEye from "../../Components/CustomInputEye/CustomInputEye";
import {Link} from "react-router-dom";

const Login = () => {

    const [state, setState] = useState({
        visiblePass: false,
        selectEng: false,
        isError: false
    });

    const ChangeLang = () => setState({...state, selectEng: !state.selectEng});

    return (
        <div className={s.container}>
            <img src={logo} alt={'logo'}/>
            <div className={s.title}>Войти в сеть</div>
            <div className={s.sup}>Требуются учетные данные администратора</div>
            <div className={s.sup} style={{color: '#FAA', visibility: !state.isError ? 'hidden' : 'visible'}}>
                Введенные
                почта или пароль не верны, попробуйте ещё раз
            </div>
            <div className={s.inpCont}>
                <CustomInput err={state.isError} text={'E-mail*'} placeholder={'Введите email'}/>
                <CustomInputEye err={state.isError}  text={'Пароль*'} type={state.visiblePass ? 'text' : 'password'}
                                state={state} setState={setState} placeholder={'Введите пароль'}/>
            </div>
            <Link to={'/profile/today'} className={s.btn}>Войти</Link>
            <Link className={s.forgot}>Забыли пароль?</Link>
            <div className={s.lang}>
                <span onClick={ChangeLang}
                      style={{color: state.selectEng ? 'rgba(255, 255, 255, 0.4)' : 'white'}}>Русский</span>
                <span onClick={ChangeLang}
                      style={{color: state.selectEng ? 'white' : 'rgba(255, 255, 255, 0.4)'}}>English</span>
            </div>
        </div>
    );
};

export default Login;