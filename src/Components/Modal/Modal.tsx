import React, {useEffect} from "react";
import styles from './Modal.module.scss'

type Props = {
  path: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ path, setModal }: Props) => {

  useEffect(() => {
    console.log(path)
  }, []);

  return (
    <div
      onClick={() => setModal(false)}
      className={styles.cont}
    >
      <div onClick={e => e.stopPropagation()} >
        <img src={path} />
      </div>
    </div>
  );
};

export default Modal;
