import React, { useState, useEffect } from "react";
import s from "./AddClient.module.scss";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setUsersChangeDefault } from "../../store/action/userChangeAction";

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
  setUsers: React.Dispatch<React.SetStateAction<UserArray[]>>;
};

const ChangeClient = ({ setUsers }: Props) => {
  const [error] = useState<string>("");

  const dispatch: any = useDispatch();

  const [errorVis] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tagId, setTagId] = useState<string>("");

  const token = useTypedSelector(state => state.user.token);

  const user = useTypedSelector(state => state.change.user);

  const handleClick = () => {
    const data = {
      name,
      email,
      phone: number,
      tag: tagId,
      user_id: user.id,
    };
    Api.editUser(token, data).then(res => {
      console.log(res);
      dispatch(setUsersChangeDefault());
      Api.getUsers(token).then(res => {
        setUsers(res.data.users);
      });
    });
  };

  const handleDelete = () => {
    const id = user.id;
    Api.deleteUser(token, id).then(() => {
      dispatch(setUsersChangeDefault());
      Api.getUsers(token).then(res => {
        setUsers(res.data.users);
      });
    });
  };

  useEffect(() => {
    setName(user.name);
    setNumber(user.phone);
    setEmail(user.email);
    setTagId(user.tag);
  }, [user]);

  return (
    <div className={s.cont}>
      <div
        className={s.title}
        onClick={() => {
          console.log(user);
        }}
      >
        Изменить текущего клиента
      </div>

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
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="test@mail.com"
          />
        </div>
        <div className={s.inpt_cont}>
          <div className={s.title}>Метка пользователя*</div>
          <input
            type="text"
            value={tagId}
            onChange={e => {
              setTagId(e.target.value);
            }}
            placeholder="Метка пользователя"
          />
        </div>
      </div>
      <div className={s.blue_btn} onClick={handleClick}>
        Изменить пользователя
      </div>
      <div className={s.red_btn} onClick={handleDelete}>
        Удалить
      </div>
      {errorVis && <p className={s.error_text}>{error}</p>}
    </div>
  );
};

export default ChangeClient;
