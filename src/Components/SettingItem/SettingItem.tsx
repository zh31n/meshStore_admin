import React from "react";
import s from "./SettingItem.module.scss";
import fileImg from "../../assets/e_mater.svg";

const SettingItem = ({}) => {
  return (
    <div className={s.set_item}>
      <div className={s.header}>
        <div className={s.title}>
          <img src={fileImg} alt="file icon" />
          фон заставки
        </div>
        <div className={s.file}>фон1.jpg</div>
      </div>
      <div className={s.main}>
        <div className={s.title}>Текст для экрана заставки</div>
        <input
          onChange={e => {
            // setTittle(e.target.value)
          }}
          type="text"
          placeholder={"Заголовок"}
        />
        <textarea placeholder={"Основной текст для заставки"} />
      </div>
    </div>
  );
};

export default SettingItem;
