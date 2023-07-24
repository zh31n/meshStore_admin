import { Route, Routes } from "react-router-dom";
import styles from "./SelectNetwork.module.scss";

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
  createNetwork: boolean;
  setCreateNetwork: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentNetwor: React.Dispatch<React.SetStateAction<object>>;
  setChangeNetwork: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectNetwork = ({
  networks,
  setCurrentNetwork,
  currentNetwork,
  setCurrentNetworkId,
  createNetwork,
  setCreateNetwork,
  setChangeNetwork,
  setCurrentNetwor,
}: Props) => {
  return (
    <div className={styles.nav_users}>
      <div className={styles.contanainer}>
        <p
          className={styles.text}
          onClick={() => {
            setChangeNetwork(true);
          }}
        >
          Изм
        </p>
        {networks.map((el, index) => (
          <div
            key={index}
            className={
              currentNetwork === el.name
                ? styles.nav_item_active
                : styles.nav_item
            }
            onClick={() => {
              setCurrentNetwork(el.name);
              setCurrentNetworkId(el.id);
              setCurrentNetwor(el);
            }}
          >
            {el.name}
          </div>
        ))}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={styles.create_network}
              onClick={() => {
                setCreateNetwork(!createNetwork);
              }}
            >
              Создать сеть
            </div>
          }
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
