import { Route, Routes } from "react-router-dom";
import Api from "../../Api/Api";
import styles from "./SelectNetwork.module.scss";
import { useState, useEffect } from "react";

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
  id: number;
  setNetworks: any;
  setUsers: React.Dispatch<React.SetStateAction<UserArray[]>>;
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
}: Props) => {
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
        {networks.map((el, index) => (
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
        ))}
      </div>
      <Routes>
        <Route
          path="/"
          element={<div className={styles.create_network}>Создать сеть</div>}
        />
        <Route
          path="/add"
          element={<div className={styles.create_network}>Создать группу</div>}
        />
      </Routes>
    </div>
  );
};

export default SelectNetwork;
