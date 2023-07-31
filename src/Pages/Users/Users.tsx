import {useEffect, useState} from "react";
import s from "./Users.module.scss";
import i_search from "../../assets/Search.svg";
import ava_img from "../../assets/ava_uu.png";
import {Route, Routes} from "react-router-dom";
import AddClient from "../AddClient/AddClient";
import AddClientsEvent from "../AddClientsEvent/AddClientsEvent";
import Api from "../../Api/Api";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import UserList from "../../Components/UserList/UserList";
import SelectNetwork from "../../Components/SelectNetwork/SelectNetwork";
import ChangeClient from "../AddClient/ChangeClient";
import UserListEvent from "../../Components/UserListEvents/UserListEvent";
import CreateNetwork from "../../Components/CreateNetwork/CreateNetwork";
import UserListAll from "../../Components/UserListAll/UserList";

type UserArray = {
    id: 0;
    name: string;
    email: string;
    phone: string;
    phone_confirmed: number;
    status: string;
    role: string;
    network: string;
    tag: string;
};

const Users = () => {
    const [findText, setFindText] = useState<string>("");
    const [addedUsers, setAddedUsers] = useState<UserArray[]>([]);
    const [currentNetwork, setCurrentNetwork] = useState<string>("");
    const [currentNetworkId, setCurrentNetworkId] = useState<number>(0);
    const [changeNetwork, setChangeNetwork] = useState<boolean>(false);

    const [networks, setNetworks] = useState<any[]>([]);

    const [users, setUsers] = useState<UserArray[]>([]);
    const [changingUsers, setChangingUsers] = useState<boolean>(false);

    const token = useTypedSelector(state => state.user.token);
    const change = useTypedSelector(state => state.change.changin);

    useEffect(() => {
        Api.getNetworks(token).then(res => {
            setNetworks(res.data.networks);
            setCurrentNetwork(res.data.networks[0].name);
        });
        Api.getUsers(token).then(res => setUsers(res.data.users));
    }, []);
    const filteredUsers = users.filter(el => {
        if (currentNetwork == el.network) {
            if (el.name.toLowerCase().includes(findText.toLowerCase())) {
                return el;
            }
        }
    });

    return (
        <>
            <div className={s.input_search}>
                <img src={i_search} alt="icon search"/>
                <input
                    type="text"
                    placeholder="Поиск по группам"
                    value={findText}
                    onChange={e => setFindText(e.target.value)}
                />
            </div>
            <SelectNetwork
                networks={networks}
                changeNetwork={changeNetwork}
                setNetworks={setNetworks}
                currentNetwork={currentNetwork}
                setCurrentNetworkId={setCurrentNetworkId}
                setCurrentNetwork={setCurrentNetwork}
                token={token}
                id={currentNetworkId}
                setUsers={setUsers}
                setChangeNetwork={setChangeNetwork}
                setChangingUsers={setChangingUsers}
            />
            <div className={s.cont}>
                <div className={s.users}>
                    <Routes>
                        <Route
                            path="/"
                            element={currentNetwork !== 'Все'
                                ? <UserList
                                    data={filteredUsers}
                                    currentNetwork={currentNetwork}
                                    image={ava_img}
                                    add={false}
                                    setAddedUsers={setAddedUsers}
                                    addedUsers={addedUsers}
                                />
                                : <UserListAll data={users} image={ava_img} text={findText} currentNetwork={''}
                                               add={false}/>
                            }
                        />
                        <Route
                            path="/network"
                            element={
                                <UserList
                                    data={filteredUsers}
                                    currentNetwork={currentNetwork}
                                    image={ava_img}
                                    add={false}
                                    setAddedUsers={setAddedUsers}
                                    addedUsers={addedUsers}
                                />
                            }
                        />
                        <Route
                            path='/add'
                            element={<UserListEvent currentNetwork={currentNetwork}/>}
                        />
                    </Routes>
                </div>
                <div className={s.left}>
                    <Routes>
                        <Route
                            path={'/*'}
                            element={
                                change == true ? (
                                    <ChangeClient setUsers={setUsers}/>
                                ) : (
                                    <AddClient
                                        setUsers={setUsers}
                                        currentNetwork={currentNetworkId}
                                    />
                                )
                            }
                        />
                        <Route
                            path='/network'
                            element={
                                <CreateNetwork
                                    setNetworks={setNetworks}
                                    setCurrentNetwork={setCurrentNetwork}
                                    changeNetwork={changeNetwork}
                                    currentNetwork={currentNetwork}
                                    setChangeNetwork={setChangeNetwork}
                                />
                            }
                        />
                        <Route
                            path='/add'
                            element={
                                <AddClientsEvent
                                    setChange={setChangingUsers}
                                    change={changingUsers}
                                    addedUsers={addedUsers}
                                    setAddedUsers={setAddedUsers}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Users;
