import { useState } from "react";
import s from "./Settings.module.scss";
import SettingItem from "../../Components/SettingItem/SettingItem";
import PhoneAndText from "../../Components/PhoneAndText/PhoneAndText";
import BeaconChange from "../../Components/BeaconChange/BeaconChange";

const Settings = () => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <div className={s.cont}>
      <div className={s.title}>
        Настройки{" "}
        <div className={s.nav}>
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
      {nav == true ? <PhoneAndText /> : <BeaconChange />}
    </div>
  );
};

export default Settings;
