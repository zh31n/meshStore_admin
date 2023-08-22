import React, {useState} from "react";
import s from "./UserItemG.module.scss";
import btn from "../../assets/More_btnsvg.svg";
import add_btn from "../../assets/Add_bnt.svg";
import added_btn from "../../assets/btn_Check.svg";
import {useDispatch} from "react-redux";
import {setUsersChange} from "../../store/action/userChangeAction";

interface Props {
    name: string;
    id: number;
    image: string;
    add: boolean;
    u: object;
    setAddedUsers: React.Dispatch<React.SetStateAction<any[]>>;
    addedUsers: any[];
}

const UserItemG = ({name, image, add, u}: Props) => {
    let [selectedUser] = useState(false);

    const dispatch: any = useDispatch();

    return (
        <div className={add ? s.connt : s.connt_n}>
            <div
                className={s.cont}
                style={{
                    background: selectedUser ? "rgba(227, 255, 226, 1)" : "#F5F5F5",
                }}
            >
                <div className={s.info}>
                    <img src={image} alt=""/>
                    <span>{name}</span>
                </div>
                <img
                    src={btn}
                    alt=""
                    className={s.points}
                    onClick={() => {
                        dispatch(setUsersChange(u));
                    }}
                />
            </div>
            {selectedUser ? (
                <img
                    className={s.add_btn}
                    // onClick={toggleAdding}
                    src={added_btn}
                    alt=""
                />
            ) : (
                <img
                    className={s.add_btn}
                    // onClick={}
                    src={add_btn}
                    alt=""
                />
            )}
        </div>
    );
};

export default UserItemG;
