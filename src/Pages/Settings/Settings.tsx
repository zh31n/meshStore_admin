import { useState } from "react";
import s from "./Settings.module.scss";
import PhoneAndText from "../../Components/PhoneAndText/PhoneAndText";
import BeaconChange from "../../Components/BeaconChange/BeaconChange";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Settings = () => {
  const [nav, setNav] = useState<boolean>(false);
  const role = useTypedSelector(state => state.user.role)

  return (
    <div className={s.cont}>
      {/* <p
        onClick={() => {
          const role = "Админ сети Bogdan Huylo yyyesss"; // Админ сервиса
          const data = role.split(" ");
          const newArr: any = [];
          data.map((el, index) => {
            if (index >= 2) newArr.push(el);
          });
          console.log(newArr.join(" "));
          /// ["Админ", "сети", "MeshStore"]
        }}
      >
        asdasdasd
      </p> */}
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
      {nav == true ? <PhoneAndText role={role} /> : <BeaconChange role={role} />}
    </div>
  );
};

export default Settings;
