import React, {useEffect, useState} from "react";
import s from "./AddClientsEvent.module.scss";
import clientsI from "../../assets/clients.svg";
import UserItem from "../../Components/UserItem/UserItem";
import Api from "../../Api/Api";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import trash from '../../assets/Trash.svg';
import UserGroup from "../../Components/UserGroup/UserGroup";

type userGroup = {
    id: number,
    network: string,
    name: string,
    users_ids: []
}

const AddClientsEvent = (props: any) => {
    const [currentGroup, setCurrentGroup] = useState<number>(0);
    const [groupName, setGroupName] = useState<string>('');
    const [userGroup, setUserGroup] = useState<userGroup[]>([]);
    const userItems = props.addedUsers.map(u => <UserItem id={u.id} addedUsers={props.addedUsers}
                                                          setAddedUsers={props.setAddedUsers} name={u.name}/>);
    const token = useTypedSelector(state => state.user.token);
    const setName = (e) => setGroupName(e.target.value);
    const createGroupUsers = () => {
        const users = props.addedUsers;
        const arr = [];
        users.map(el => arr.push(el.id))
        const data = {users: arr, name: groupName}
        Api.createUserGroup(token, data)
        setGroupName('');
    }
    const deleteGroup = () => {
        Api.deleteUserGroup(token,currentGroup).then(res => {
            Api.getUsersGroup(token).then(res => {

                setUserGroup(res.data.user_groups)
            })
        })
    }
    const changeGroupUsers = () => props.setChange(false)


    useEffect(() => {
        Api.getUsersGroup(token).then(res => {
            console.log(res.data)
            setUserGroup(res.data.user_groups)
        })
    }, [])

    if (props.change) {
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
                <div onClick={createGroupUsers} className={s.btn}>Создать группу</div>
            </div>
        );
    }

    return (
        <div className={s.cont}>
            <div className={s.cont_delete}>
                <div className={s.inp_name}>
                    <input type="text" placeholder={'Название группы'} value={groupName} onChange={setName}/>
                </div>
                <img onClick={deleteGroup} style={{cursor: 'pointer'}} src={trash} alt="trash"/>
            </div>
            <select style={{width: '100%'}} value={currentGroup}
                    onChange={e => setCurrentGroup(Number(e.target.value))}>
                {userGroup.map(el => <option value={el.id}>{el.name}</option>)}
            </select>
            <div className={s.title}>
                <img src={clientsI} alt={"dsds"}/>
                Список выбранных клиентов
            </div>
            <div className={s.userCont}>
                {/*{userItems}*/}
                <UserGroup currentGroup={currentGroup}/>
            </div>
            <div onClick={changeGroupUsers} className={s.btn}>Сохранить изменения</div>
        </div>
    );
};

export default AddClientsEvent;
