import { NavLink, Route, Routes } from "react-router-dom";
import Api from "../../Api/Api";
import styles from "./SelectNetwork.module.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {setAddUsers } from "../../store/action/addUsersAction";
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
  networks: any[];
  setCurrentNetwork: React.Dispatch<React.SetStateAction<string>>;
  currentNetwork: string;
  setCurrentNetworkId: React.Dispatch<React.SetStateAction<number>>;
  token: string;
  changeNetwork: boolean;
  setChangeNetwork: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  setNetworks: any;
  setUsers: React.Dispatch<React.SetStateAction<UserArray[]>>;
  setChangingUsers: React.Dispatch<React.SetStateAction<boolean>>;
  changeUser: boolean;
};

const SelectNetwork = ({
  networks,
  setCurrentNetwork,
  currentNetwork,
  setCurrentNetworkId,
  token,
  id,
  setNetworks,
  setUsers,
  setChangingUsers,
  changeNetwork,
  changeUser,
  setChangeNetwork,
}: Props) => {
  const role = useTypedSelector(state => state.user.role);

  const dispatch: any = useDispatch();

  const [change, setChange] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    Api.changeNetwork(token, { network: id, name: text }).then(() => {
      setChange(false);
      Api.getNetworks(token).then(res => {
        setNetworks(res.data.networks);
        setCurrentNetwork(res.data.networks[id].name);
      });
      Api.getUsers(token).then(res => {
        setUsers(res.data.users);
      });
    });
  };

  useEffect(() => {
    setChange(false);
  }, [currentNetwork]);

  return (
    <div className={styles.nav_users}>
      <div className={styles.contanainer}>
        {role === 2 && (
            <NavLink to={"/profile/clients/network"} className={styles.nav_item_active}  onClick={() => {
              !changeNetwork ? setChangeNetwork(true) : setChangeNetwork(false)
            }}>
              Изм
            </NavLink>
        )}
        {role === 2
          ? networks.map((el, index) => (
              <div
                key={index}
                className={
                  currentNetwork === el.name
                    ? styles.nav_item_active
                    : styles.nav_item
                }
                onDoubleClick={() => {
                  setText(el.name);
                  setChange(true);
                }}
                onClick={() => {
                  setCurrentNetwork(el.name);
                  setCurrentNetworkId(el.id);
                }}
              >
                {change && currentNetwork === el.name ? (
                  <input
                    value={text}
                    onChange={e => {
                      setText(e.target.value);
                    }}
                    onDoubleClick={handleClick}
                  />
                ) : (
                  el.name
                )}
              </div>
            ))
          : ""}
        {role === 2 && (
          <div
            className={
              currentNetwork === "Все"
                ? styles.nav_item_active
                : styles.nav_item
            }
            // onDoubleClick={() => {
            //     setText(el.name);
            //     setChange(true);
            // }}
            onClick={() => {
              setCurrentNetwork("Все");
              // setCurrentNetworkId(el.id);
            }}
          >
            Все
          </div>
        )}
      </div>
      <Routes>
        <Route
          path={"/"}
          element={
            <NavLink to={"/profile/clients/network"}>
              <div className={styles.create_network}>Создать сеть</div>
            </NavLink>
          }
        />
        <Route
          path="/network"
          element={
            <NavLink to={"/profile/clients"}>
              <div className={styles.create_network}>Вернуться</div>
            </NavLink>
          }
        />
        <Route
          path={"/add"}
          element={
            <div
              onClick={() => {
                dispatch(setAddUsers([]));
                setChangingUsers(!changeUser);
              }}
              className={styles.create_network}
            >
              Создать группу
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default SelectNetwork;
