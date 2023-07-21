import React from "react";
import s from "./PhoneAndText.module.scss";
import SettingItem from "../SettingItem/SettingItem";

const PhoneAndText = () => {
  return (
    <div className={s.cont_i}>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <SettingItem />
      </div>
      <div className={s.line}></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <SettingItem />
      </div>
    </div>
  );
};

export default PhoneAndText;
