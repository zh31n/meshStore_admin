import { useState } from "react";
import s from "./Users.module.scss";
import i_search from "../../assets/Search.svg";
import ava_img from "../../assets/ava_uu.png";
import UserItemG from "../../Components/UserItemG/UserItemG";

const Users = () => {
  const [view, setView] = useState<boolean>(false);

  const data = {
    users: [
      { name: "Фёдор Шишкин", id: 1, image: ava_img },
      { name: "Фёдор Шишкин", id: 1, image: ava_img },
      { name: "Фёдор Шишкин", id: 1, image: ava_img },
      { name: "Фёдор Шишкин", id: 1, image: ava_img },
      { name: "Фёдор Шишкин", id: 1, image: ava_img },
    ],
  };

  return (
    <>
      <div className={s.input_search}>
        <img src={i_search} alt="icon search" />
        <input type="text" placeholder="Поиск по группам" />
      </div>
      <div className={s.nav_users}>
        <div
          className={view == true ? s.nav_item : s.nav_item_active}
          onClick={() => {
            setView(!view);
          }}
        >
          Сотрудники
        </div>
        <div
          className={view == true ? s.nav_item_active : s.nav_item}
          onClick={() => {
            setView(!view);
          }}
        >
          Клиенты
        </div>
      </div>
      <div className={s.cont}>
        <div className={s.users}>
          <UserItemG name={"Фёдор Шишкин"} id={1} image={ava_img} />
        </div>
        <div className={s.left}></div>
      </div>
    </>
  );
};

export default Users;