import React from "react";
import s from "./UserItem.module.scss";
import trash from "../../assets/white_trash.svg";
import ava from "../../assets/ava_uu.png";

interface Props {
    name: string;
    setAddedUsers: void;
    id: number;
    addedUsers: []
}

const UserItem = ({name, id, setAddedUsers, addedUsers}: Props) => {

    const deleteUser = () => {
        let arr = addedUsers.filter(el => el.id !== id)
        setAddedUsers(arr)
    }


    return (
        <div className={s.contant}>
            <div className={s.u_cont}>
                <img src={ava} alt="user image"/>
                <span>{name}</span>
            </div>
            <div className={s.trash} onClick={deleteUser}>
                <img src={trash} alt=""/>
            </div>
        </div>
    );
};

export default UserItem;
