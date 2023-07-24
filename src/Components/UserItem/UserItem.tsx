import s from "./UserItem.module.scss";
import trashimg from "../../assets/white_trash.svg";
import ava from "../../assets/ava_uu.png";

interface Props {
  name: string;
  trash: boolean;
}

const UserItem = ({ name, trash }: Props) => {
  return (
    <div className={s.contant}>
      <div className={s.u_cont}>
        <img src={ava} alt="user image" />
        <span>{name}</span>
      </div>
      {trash && (
        <div className={s.trash}>
          <img src={trashimg} alt="" />
        </div>
      )}
    </div>
  );
};

export default UserItem;
