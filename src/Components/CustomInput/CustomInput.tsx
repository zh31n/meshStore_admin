import React from "react";
import s from "./CustomInput.module.css";

type Props = {
  text: string;
  placeholder: string;
  err: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const CustomInput = ({ text, placeholder, err, value, setValue }: Props) => {
  return (
    <div
      className={s.inputCont}
      style={{
        background: err ? "rgba(255,148,148,0.3)" : "rgba(255, 255, 255, 0.3)",
        border: err ? "1px solid rgba(241,41,41,0.3)" : "none",
      }}
    >
      <div className={s.sup}>{text}</div>
      <input
        className={s.input_i}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
