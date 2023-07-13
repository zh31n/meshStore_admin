import {useState} from "react";
import s from "./Users.module.scss";
import i_search from "../../assets/Search.svg";
import ava_img from "../../assets/ava_uu.png";
import UserItemG from "../../Components/UserItemG/UserItemG";
import {Route,Routes} from 'react-router-dom';
import AddClient from "../AddClient/AddClient";
import AddClientsEvent from "../AddClientsEvent/AddClientsEvent";

const Users = () => {
    const [view, setView] = useState<boolean>(false);

    const data = {
        users: [
            {name: "Фёдор Шишкин", id: 1, image: ava_img},
            {name: "Фёдор Шишкин", id: 1, image: ava_img},
            {name: "Фёдор Шишкин", id: 1, image: ava_img},
            {name: "Фёдор Шишкин", id: 1, image: ava_img},
            {name: "Фёдор Шишкин", id: 1, image: ava_img},
        ],
    };

    const userItems = data.users.map(u => <UserItemG add={false} name={u.name} id={u.id} image={u.image}/>)
    const userItemsAdd = data.users.map(u => <UserItemG add={true} name={u.name} id={u.id} image={u.image}/>)

    return (
        <>
            <div className={s.input_search}>
                <img src={i_search} alt="icon search"/>
                <input type="text" placeholder="Поиск по группам"/>
            </div>
            <div className={s.nav_users}>
                <div
                    className={view ? s.nav_item : s.nav_item_active}
                    onClick={() => {
                        setView(!view);
                    }}
                >
                    Сотрудники
                </div>
                <div
                    className={view ? s.nav_item_active : s.nav_item}
                    onClick={() => {
                        setView(!view);
                    }}
                >
                    Клиенты
                </div>
            </div>
            <div className={s.cont}>
                <div className={s.users}>
                    <Routes>
                        <Route path={'/'} element={userItems}/>
                        <Route path={'/add'} element={[userItemsAdd,userItemsAdd]}/>
                    </Routes>
                    {/*{userItems}{userItems}{userItems}*/}
                </div>
                <div className={s.left}>
                    <Routes>
                        <Route path={'/'} element={<AddClient/>}/>
                        <Route path={'/add'} element={<AddClientsEvent/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Users;
