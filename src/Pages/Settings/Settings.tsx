import { useEffect, useState } from "react";
import s from "./Settings.module.scss";
import PhoneAndText from "../../Components/PhoneAndText/PhoneAndText";
import BeaconChange from "../../Components/BeaconChange/BeaconChange";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Api from "../../Api/Api";

const Settings = () => {
  const [nav, setNav] = useState<boolean>(false);
  const role = useTypedSelector(state => state.user.role);
  const token = useTypedSelector(state => state.user.token);
  const [currentNetwork, setCurrentNetwork] = useState<number>(0);
  const [networks, setNetworks] = useState<any[]>([]);

  useEffect(() => {
    Api.getNetworks(token).then(res => {
      setNetworks(res.data.networks);
      res.data.networks.lenght !== 0 &&
        setCurrentNetwork(res.data.networks[0].id);
    });
  }, []);

  return (
    <div className={s.cont}>
      <div className={s.title}>
        Настройки
        <div className={s.nav}>
          {role && (
            <select
              value={currentNetwork}
              className={s.select}
              onChange={e => setCurrentNetwork(Number(e.target.value))}
            >
              {networks.map(el => (
                <option value={el.id}>{el.name}</option>
              ))}
            </select>
          )}

          <div
            className={nav == false ? s.selected_nav : s.nav_item}
            onClick={() => {
              setNav(!nav);
            }}
          >
            <p>маячки</p>
          </div>
          <div
            className={nav == true ? s.selected_nav : s.nav_item}
            onClick={() => {
              setNav(!nav);
            }}
          >
            <p>фон и текст</p>
          </div>
        </div>
      </div>
      {nav == true ? (
        <PhoneAndText network={currentNetwork} />
      ) : (
        <BeaconChange networks={currentNetwork} />
      )}
    </div>
  );
};

export default Settings;
