import {useEffect, useState} from "react";
import s from "./AddClientsEvent.module.scss";
import clientsI from "../../assets/clients.svg";
import Api from "../../Api/Api";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import trash from "../../assets/Trash.svg";
import UserGroup from "../../Components/UserGroup/UserGroup";
import {useDispatch} from "react-redux";
import {setAddUsers, setAddUsersDefault,} from "../../store/action/addUsersAction";
import useQuery from "../../hooks/useQuery.ts";

type userGroup = {
    id: number;
    network: string;
    name: string;
    users_ids: [];
};

const AddClientsEvent = (props: any) => {

    const id: any = useQuery('id');

    const group_id: any = useQuery('group');

    const [name, setName] = useState<string>("");

    const [changedName, setChangedName] = useState<string>("");

    const dispatch: any = useDispatch();

    const token = useTypedSelector(state => state.user.token);
    const users = useTypedSelector(state => state.addUsers.users);

    const [currentGroup, setCurrentGroup] = useState<number>(0);

    const [array, setArray] = useState<userGroup[]>([]);

    // const currentGroupRId: string = useTypedSelector(state => state.addCurrentKey.currentGroupName.id);
    // const currentGroupUsers: number[] = useTypedSelector(state => state.addCurrentKey.currentGroupName.users_ids);
    useEffect(() => {
        Api.getUsersGroup(token, Number(id)).then(res => {
            if (res.data.user_groups.lenght !== 0) {
                setArray(res.data.user_groups);
                if(group_id){
                    setCurrentGroup(group_id);
                }else{
                    setCurrentGroup(res.data.user_groups[0].id);
                }
                // setCurrentGroup(Number(currentGroupRId));
                // dispatch(setAddUsers(currentGroupUsers));
            } else {
                dispatch(setAddUsersDefault());
            }
        });
    }, []);

    useEffect(() => {
        array.map(el => {
            if (el.id === currentGroup) {
                dispatch(setAddUsers(el.users_ids));
            }
        });
    }, [currentGroup]);

    const deleteGroup = () => {
        Api.deleteUserGroup(token, currentGroup).then(() => {
            Api.getUsersGroup(token, Number(id)).then(res => {
                setArray(res.data.user_groups);
                setCurrentGroup(res.data.user_groups[0].id);
            });
        });
    };

    const handleCreate = () => {
        const data = {
            name: name,
            users: [1, 7],
        };
        console.log(users);
        Api.createUserGroup(token, data).then(() => {
            props.setChange(false);
            Api.getUsersGroup(token, Number(id)).then(res => {
                setArray(res.data.user_groups);
                setCurrentGroup(res.data.user_groups[0].id);
                dispatch(setAddUsers(res.data.user_groups[0].users_ids));
            });
        });
    };

    const handleSave = () => {
        Api.changeUserGroup(token, currentGroup, users, changedName).then(() => {
            Api.getUsersGroup(token, Number(id)).then(res => {
                if (res.data.user_groups.lenght !== 0) {
                    setArray(res.data.user_groups);
                    setCurrentGroup(res.data.user_groups[0].id);
                    dispatch(setAddUsers(res.data.user_groups[0].users_ids));
                } else {
                    dispatch(setAddUsersDefault());
                }
            });
        });
    };

    useEffect(() => {
        array.map(el => {
            if (el.id === currentGroup) {
                setChangedName(el.name);
            }
        });
    }, [currentGroup]);

    if (props.change) {
        return (
            <div className={s.cont}>
                <div className={s.inp_name}>
                    <input
                        type="text"
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        placeholder={"Название группы"}
                    />
                </div>
                <div className={s.title}>
                    <img src={clientsI} alt={"dsds"}/>
                    Список выбранных клиентов
                </div>
                <div className={s.userCont}>
                    <UserGroup currentGroup={currentGroup}/>
                </div>
                <div className={s.btn} onClick={handleCreate}>
                    Создать группу
                </div>
            </div>
        );
    }

    return (
        <div className={s.cont}>
            <div className={s.cont_delete}>
                <div className={s.inp_name}>
                    <select
                        style={{width: "100%"}}
                        value={currentGroup}
                        onChange={e => {
                            setCurrentGroup(Number(e.target.value));
                        }}
                    >
                        {array.map(el => (
                            <option value={el.id} key={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <img
                    style={{cursor: "pointer"}}
                    onClick={deleteGroup}
                    src={trash}
                    alt="trash"
                />
            </div>
            <div className={s.add_cotnianre}>
                Новое название*
                <input
                    placeholder="Название группы*"
                    value={changedName}
                    onChange={e => {
                        setChangedName(e.target.value);
                    }}
                />
            </div>
            <div className={s.title}>
                <img src={clientsI} alt={"dsds"}/>
                Список выбранных клиентов
            </div>
            <div className={s.userCont}>
                <UserGroup currentGroup={currentGroup}/>
            </div>
            <div className={s.btn} onClick={handleSave}>
                Сохранить изменения
            </div>
        </div>
    );
};

export default AddClientsEvent;
