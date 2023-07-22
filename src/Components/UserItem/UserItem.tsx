import React from "react";
import s from "./UserItem.module.scss";
import trash from "../../assets/white_trash.svg";
import ava from "../../assets/ava_uu.png";

interface Props {
  name: string;
}

const UserItem = ({ name }: Props) => {
  return (
    <div className={s.contant}>
      <div className={s.u_cont}>
        <img src={ava} alt="user image" />
        <span>{name}</span>
      </div>
      <div className={s.trash}>
        <img src={trash} alt="" />
      </div>
    </div>
  );
};

export default UserItem;
