import React, { useState } from "react";
import s from "./AddClient.module.scss";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type UserArray = {
  id: 0;
  name: string;
  email: string;
  phone: string;
  phone_confirmed: number;
  status: string;
  role: string;
  network: string;
  tag: string;
};

type Props = {
  currentNetwork: number;
  setUsers: React.Dispatch<React.SetStateAction<UserArray[]>>;
};

const AddClient = ({ currentNetwork, setUsers }: Props) => {
  const [error, setError] = useState<string>("");
  const [errorVis, setErrorVis] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<number>(0);

  const token = useTypedSelector(state => state.user.token);

  const handleClick = () => {
    const phone = Number(number);
    Api.addUser(token, name, email, phone, "", currentNetwork, role)
      .then(res => {
        if (res.data.error) {
          setErrorVis(true);
          setError(res.data.error);
          setTimeout(() => {
            setErrorVis(false);
            setError("");
          }, 4000);
        }
        setName("");
        setNumber("");
        setEmail("");
        setRole(0);
        if (res.data.success == true) {
          Api.getUsers(token).then(res => {
            setUsers(res.data.users);
          });
        }
      })
      .catch(err => {
        console.log(err);
        setError("Ошибка при создании пользователя");
        setErrorVis(true);
      });
  };

  return (
    <div className={s.cont}>
      <div className={s.title}>Добавить нового клиента</div>

      <div className={s.inputs_cont}>
        <div className={s.inpt_cont}>
          <div className={s.title}>Имя/ логин клиента*</div>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Иван Иванович"
          />
        </div>
        <div className={s.inpt_cont}>
          <div className={s.title}>Номер телефона*</div>
          <input
            type="number"
            value={number}
            onChange={e => {
              setNumber(e.target.value);
            }}
            placeholder="+ _-___-___-___"
          />
        </div>
        <div className={s.inpt_cont}>
          <div className={s.title}>Электронная почта*</div>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="test@mail.com"
          />
        </div>
        <div className={s.inpt_cont}>
          <div className={s.title}>Статус пользователя</div>
          <select value={role} onChange={e => setRole(Number(e.target.value))}>
            <option value={0}>Клиент</option>
            <option value={1}>Администратор</option>
            <option value={2}>Главный администратор</option>
          </select>
        </div>
      </div>
      <div className={s.blue_btn} onClick={handleClick}>
        Добавить пользователя
      </div>
      {errorVis && <p className={s.error_text}>{error}</p>}
    </div>
  );
};

export default AddClient;
