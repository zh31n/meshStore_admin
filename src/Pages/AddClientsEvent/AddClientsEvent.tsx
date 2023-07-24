import s from "./AddClientsEvent.module.scss";
import clientsI from "../../assets/clients.svg";
import ava_img from "../../assets/ava_uu.png";
import UserItem from "../../Components/UserItem/UserItem";

const data = {
  users: [
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
    { name: "Фёдор Шишкин", id: 1, image: ava_img },
  ],
};

const AddClientsEvent = () => {
  const userItems = data.users.map(u => (
    <UserItem trash={true} name={u.name} />
  ));

  return (
    <div className={s.cont}>
      <div className={s.title}>
        <img src={clientsI} alt={"dsds"} />
        Список выбранных клиентов
      </div>
      <div className={s.userCont}>{userItems}</div>
      <div className={s.btn}>Сохранить</div>
    </div>
  );
};

export default AddClientsEvent;
