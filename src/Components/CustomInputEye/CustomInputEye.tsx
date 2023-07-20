import React from "react";
import s from "./CustomInputEye.module.css";
import eye from "../../assets/eye.svg";

type Props = {
  setState: React.Dispatch<
    React.SetStateAction<{
      visiblePass: boolean;
      selectEng: boolean;
      isError: boolean;
    }>
  >;
  text: string;
  type: string;
  placeholder: string;
  err: boolean;
  state: {
    visiblePass: boolean;
    selectEng: boolean;
    isError: boolean;
  };
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const CustomInputEye = ({
  state,
  setState,
  text,
  type,
  placeholder,
  err,
  value,
  setValue,
}: Props) => {
  const changeVisible = () =>
    setState({ ...state, visiblePass: !state.visiblePass });

  return (
    <div
      className={s.inputCont}
      style={{
        background: err ? "rgba(255,148,148,0.3)" : "rgba(255, 255, 255, 0.3)",
        border: err ? "1px solid rgba(241,41,41,0.3)" : "none",
      }}
    >
      <div className={s.eyeCont}>
        <div className={s.sup}>{text}</div>
        <input
          className={s.input_eye}
          type={type}
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          placeholder={placeholder}
        />
      </div>
      <img onClick={changeVisible} className={s.imgeye} src={eye} alt={"eye"} />
    </div>
  );
};

export default CustomInputEye;
