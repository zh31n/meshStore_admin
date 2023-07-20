import { useState } from "react";
import s from "./Login.module.css";
import logo from "../../assets/logo.svg";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomInputEye from "../../Components/CustomInputEye/CustomInputEye";
import { useDispatch } from "react-redux";
import Api from "../../Api/Api";
import { setUsers } from "../../store/action/userAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Login = () => {
  const dispatch: any = useDispatch();

  const user = useTypedSelector(state => state.user);

  const [state, setState] = useState({
    visiblePass: false,
    selectEng: false,
    isError: false,
  });

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = () => {
    Api.Auth(login, password).then(res => {
      console.log("res", res);
      if (res.status == 200) {
        const token: string = res.data.token;
        const role: number = res.data.role;
        const data = { token, role };
        dispatch(setUsers(data));
      }
    });
  };

  const ChangeLang = () => setState({ ...state, selectEng: !state.selectEng });

  return (
    <div className={s.container}>
      <img src={logo} alt={"logo"} />
      <div
        className={s.title}
        onClick={() => {
          console.log(user);
        }}
      >
        Войти в сеть
      </div>
      <div className={s.sup}>Требуются учетные данные администратора</div>
      <div
        className={s.sup}
        style={{
          color: "#FAA",
          visibility: !state.isError ? "hidden" : "visible",
        }}
      >
        Введенные почта или пароль не верны, попробуйте ещё раз
      </div>
      <div className={s.inpCont}>
        <CustomInput
          setValue={setLogin}
          value={login}
          err={state.isError}
          text={"E-mail*"}
          placeholder={"Введите email"}
        />
        <CustomInputEye
          err={state.isError}
          setValue={setPassword}
          value={password}
          text={"Пароль*"}
          type={state.visiblePass ? "text" : "password"}
          state={state}
          setState={setState}
          placeholder={"Введите пароль"}
        />
      </div>
      <button className={s.btn} onClick={handleClick}>
        Войти
      </button>

      <div className={s.lang}>
        <span
          onClick={ChangeLang}
          style={{
            color: state.selectEng ? "rgba(255, 255, 255, 0.4)" : "white",
          }}
        >
          Русский
        </span>
        <span
          onClick={ChangeLang}
          style={{
            color: state.selectEng ? "white" : "rgba(255, 255, 255, 0.4)",
          }}
        >
          English
        </span>
      </div>
    </div>
  );
};

export default Login;
