import s from "./UserItem.module.scss";
import ava from "../../assets/ava_uu.png";

interface Props {
  name: string;
  setAddedUsers: any;
  id: number;
  addedUsers: any[];
}

const UserItem = ({ name }: Props) => {
  return (
    <div className={s.contant}>
      <div className={s.u_cont}>
        <img src={ava} alt="user image" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default UserItem;
