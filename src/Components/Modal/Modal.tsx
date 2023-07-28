import React from "react";
import s from "./Modal.module.scss";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  filepath: string;
  number: string;
};

const Modal = ({ setModal, filepath, number }: Props) => {
  return (
    <div
      className={s.main_container}
      onClick={() => {
        setModal(false);
      }}
    >
      <img
        src={`http://83.220.174.249:5123${filepath}?u=${number}`}
        onClick={e => {
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default Modal;
