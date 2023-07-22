import { useEffect, useState } from "react";
import s from "./Users.module.scss";
import i_search from "../../assets/Search.svg";
import ava_img from "../../assets/ava_uu.png";
import UserItemG from "../../Components/UserItemG/UserItemG";
import { Route, Routes } from "react-router-dom";
import AddClient from "../AddClient/AddClient";
import AddClientsEvent from "../AddClientsEvent/AddClientsEvent";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserList from "../../Components/UserList/UserList";
import SelectNetwork from "../../Components/SelectNetwork/SelectNetwork";
import ChangeClient from "../AddClient/ChangeClient";

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

const Users = () => {
  const [findText, setFindText] = useState<string>("");

  const [currentNetwork, setCurrentNetwork] = useState<string>("");
  const [currentNetworkId, setCurrentNetworkId] = useState<number>(0);

  const [networks, setNetworks] = useState<any[]>([]);

  const [users, setUsers] = useState<UserArray[]>([]);

  const token = useTypedSelector(state => state.user.token);
  const change = useTypedSelector(state => state.change.changin);

  useEffect(() => {
    Api.getNetworks(token).then(res => {
      setNetworks(res.data.networks);
      setCurrentNetwork(res.data.networks[0].name);
    });
    Api.getUsers(token).then(res => {
      setUsers(res.data.users);
    });
  }, []);

  const filteredUsers = users.filter(el => {
    if (currentNetwork == el.network) {
      if (el.name.toLowerCase().includes(findText.toLowerCase())) {
        return el;
      }
    }
  });

  return (
    <>
      <div className={s.input_search}>
        <img src={i_search} alt="icon search" />
        <input
          type="text"
          placeholder="Поиск по группам"
          value={findText}
          onChange={e => {
            setFindText(e.target.value);
          }}
        />
      </div>
      <SelectNetwork
        networks={networks}
        setNetworks={setNetworks}
        currentNetwork={currentNetwork}
        setCurrentNetworkId={setCurrentNetworkId}
        setCurrentNetwork={setCurrentNetwork}
        token={token}
        id={currentNetworkId}
        setUsers={setUsers}
      />
      <div className={s.cont}>
        <div className={s.users}>
          <Routes>
            <Route
              path="/"
              element={
                <UserList
                  data={filteredUsers}
                  currentNetwork={currentNetwork}
                  image={ava_img}
                  add={false}
                />
              }
            />
            <Route
              path="/add"
              element={
                <UserList
                  data={filteredUsers}
                  currentNetwork={currentNetwork}
                  image={ava_img}
                  add={true}
                />
              }
            />
          </Routes>
        </div>
        <div className={s.left}>
          <Routes>
            <Route
              path="/"
              element={
                change == true ? (
                  <ChangeClient setUsers={setUsers} />
                ) : (
                  <AddClient
                    setUsers={setUsers}
                    currentNetwork={currentNetworkId}
                  />
                )
              }
            />
            <Route path="/add" element={<AddClientsEvent />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Users;
