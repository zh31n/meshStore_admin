import React, {useEffect, useState} from "react";
import s from "./AddClientsEvent.module.scss";
import clientsI from "../../assets/clients.svg";
import ava_img from "../../assets/ava_uu.png";
import UserItem from "../../Components/UserItem/UserItem";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Api from "../../Api/Api";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const AddClientsEvent = (props: any) => {
    const [currentGroup, setCurrentGroup] = useState<number>(0);
    const [groupName, setGroupName] = useState<string>('');
    const userItems = props.addedUsers.map(u => <UserItem id={u.id} addedUsers={props.addedUsers} setAddedUsers={props.setAddedUsers} name={u.name}/>);
    const token = useTypedSelector(state => state.user.token);
    const setName = (e) => setGroupName(e.target.value);
    const createGroupUsers = () => {
        const users = props.addedUsers;
        const arr = [];
        users.map(el => {
            arr.push(el.id)
        })
        const data = {users: arr, name: groupName}
        console.log(data)
        Api.createUserGroup(token, data).then(res => {
            console.log(res.data);
        })
        setGroupName('');
    }

    return (
        <div className={s.cont}>
            <div className={s.inp_name}>
                <input type="text" placeholder={'Название группы'} value={groupName} onChange={setName}/>
            </div>
            <div className={s.title}>
                <img src={clientsI} alt={"dsds"}/>
                Список выбранных клиентов
            </div>
            <div className={s.userCont}>{userItems}</div>
            <div onClick={createGroupUsers} className={s.btn}>Сохранить</div>
        </div>
    );
};

export default AddClientsEvent;
