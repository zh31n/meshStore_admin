import React from "react";

type Props = {
  path: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ path, setModal }: Props) => {
  return (
    <div
      onClick={() => setModal(false)}
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: "60%" }}>
        <img src={path} />
      </div>
    </div>
  );
};

export default Modal;
