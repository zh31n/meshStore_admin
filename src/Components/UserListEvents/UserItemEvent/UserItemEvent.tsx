import s from "./UserItemEvent.module.scss";
import { useState, useEffect } from "react";
import btn from "../../../assets/More_btnsvg.svg";
import added_btn from "../../../assets/btn_Check.svg";
import add from "../../../assets/Add_bnt.svg";
import { useDispatch } from "react-redux";
import image from "../../../assets/ava_uu.svg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { setAddUsers } from "../../../store/action/addUsersAction";

interface Props {
  name: string;
  id: number;
}

const UserItemEvent = ({ name, id }: Props) => {
  const usersIds = useTypedSelector(state => state.addUsers.users);

  const [added, setAdded] = useState<boolean>(false);


  const dispatch: any = useDispatch();

  const handleDelete = () => {
    const newArr: number[] = [];
    usersIds.map(el => {
      if (el !== id) {
        newArr.push(el);
      }
    });
    dispatch(setAddUsers(newArr));
    setAdded(false);
  };

  const handleAdd = () => {
    dispatch(setAddUsers([...usersIds, id]));
  };

  useEffect(() => {

    usersIds.length !== 0 ? setAdded(false) : usersIds.map(el => {
      if (el === id) {
        setAdded(true);
      }
    });


  }, [usersIds]);

  return (
    <div className={s.connt}>
      <div
        className={s.cont}
        style={{
          background: "rgba(227, 255, 226, 1)",
        }}
      >
        <div className={s.info}>
          <img src={image} alt="" />
          <span>{name}</span>
        </div>
        <img src={btn} alt="" className={s.points} />
      </div>
      {added ? (
        <img
          className={s.add_btn}
          onClick={handleDelete}
          src={added_btn}
          alt=""
        />
      ) : (
        <img className={s.add_btn} onClick={handleAdd} src={add} alt="" />
      )}
    </div>
  );
};

export default UserItemEvent;
