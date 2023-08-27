import {useEffect, useRef, useState} from "react";
import s from "./ChangeEvent.module.scss";
import trash from "../../assets/Trash.svg";
import upload from "../../assets/File_Upload.svg";
import e_users from "../../assets/clients.svg";
import {NavLink, useParams} from "react-router-dom";
import Api from "../../Api/Api";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import UserGroup from "../../Components/UserGroup/UserGroup";
import {useDispatch} from "react-redux";
import {setAddUsers} from "../../store/action/addUsersAction.ts";

const ChangeEvent = ({setNewArr, id}: any) => {
    const token = useTypedSelector(state => state.user.token);

    const {eventId} = useParams();

    const ref = useRef<any>();

    const navlink = useRef<any>();

    const dispatch: any = useDispatch()

    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [filename, setFileName] = useState<string>("");
    const [link, setLink] = useState<string>("");

    const [allBeacons, setAllBeacons] = useState<any[]>([]);
    const [allGroups, setAllGroups] = useState<any[]>([]);

    const [currentBeacon, setCurrentBeacon] = useState<number>(1);
    const [currentGroup, setCurrentGroup] = useState<any>(0);

    const [start, setStart] = useState<string>("");
    const [finish, setFinish] = useState<string>("");

    const [dataStart, setDataStart] = useState<string>('')

    const [finishedDate, setFinishedDate] = useState<string>("");
    const [_, setCurrentNetwork] = useState<number>(0);

    const [file, setFile] = useState<any>();

    useEffect(() => {
        Api.getAllBeacon(token, Number(id)).then(res => {
            setAllBeacons(res.data.beacons);
            setCurrentBeacon(res.data.beacons[0].id);
        });
        Api.getUsersGroup(token, Number(id)).then(res => {
            setAllGroups(res.data.user_groups);
            setCurrentGroup(JSON.stringify(res.data.user_groups[0]));
            dispatch(setAddUsers(res.data.user_groups[0].users_ids))
        });
    }, []);

    const hadnleDelete = () => {
        Api.deleteNotification(token, Number(eventId)).then(() => {
            Api.allNotifications(token, Number(id)).then(res => {
                setNewArr(res.data.notifications[0]);
            });
        });
        navlink.current.click();
    };

    const handleSave = () => {
        const date = new FormData();

        const groupData = JSON.parse(currentGroup)
        const time = `${dataStart}T${start}`
        const endTime = `${finishedDate}T${finish}`


        date.append("beacon", String(currentBeacon));
        date.append('network', String(id))
        date.append("group", String(groupData.id));
        date.append("start", String(time));
        date.append("finish", String(endTime));
        date.append("title", String(title));
        date.append("text", String(text));
        file ? date.append("file", file[0]) : date.append("file", '')

        Api.editNotification(token, date, Number(eventId)).then(res => {
            console.log(res.data);
            Api.allNotifications(token, Number(id)).then(res => {
                console.log(res.data.notifications[0].notifications)
                setNewArr(res.data.notifications[0]);
            });
        });
        navlink.current.click();
    };

    useEffect(() => {
        Api.getNotification(token, Number(eventId)).then(res => {
            Api.getNetworks(token).then(response => {
                response.data.networks.map((el: any) => {
                    if (el.name === res.data.network) {
                        setCurrentNetwork(el.id);
                    }
                });
            });
            Api.getUsersGroup(token, Number(id)).then(res => {
                setAllGroups(res.data.user_groups);
                setCurrentGroup(JSON.stringify(res.data.user_groups[0]));
                dispatch(setAddUsers(res.data.user_groups[0].users_ids))
            });
            setCurrentGroup(res.data.group.id);
            setText(res.data.text);
            setTitle(res.data.title);
            setStart(res.data.start.split(" ")[1]);
            setFinish(res.data.finish.split(" ")[1]);
            setDataStart(res.data.start.split(" ")[0]);
            setFinishedDate(res.data.finish.split(" ")[0]);
            setLink(res.data.link);
            setFileName(res.data.file);
        });
    }, [eventId]);

    return (
        <>
            <div className={s.title}>
                Изменение события для расписания
                <img className={s.trash} src={trash} alt="trash icon" onClick={hadnleDelete}/>
            </div>
            <NavLink to={"/"} ref={navlink} style={{display: "none"}}>
                asd
            </NavLink>
            <div className={s.content}>
                <div className={s.right}>
                    <div className={s.name_ev}>
                        <div className={s.title}>Название для события*</div>
                        <input
                            type="text"
                            value={title}
                            onChange={e => {
                                setTitle(e.target.value);
                            }}
                            placeholder="Введите своё название"
                        />
                    </div>
                    <div className={s.comm}>
                        <div className={s.title}>Добавьте комментарий*</div>
                        <textarea
                            placeholder="Текст для сообщения"
                            value={text}
                            onChange={e => {
                                setText(e.target.value);
                            }}
                        />
                    </div>
                    <div className={s.select}>
                        <div className={s.title}>Выберите маячок*</div>
                        <select
                            value={currentBeacon}
                            onChange={e => {
                                const value = Number(e.target.value);
                                setCurrentBeacon(value);
                                console.log(value);
                            }}
                        >
                            {allBeacons.map((el, index) => (
                                <option key={index} value={el.id}>
                                    {el.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={s.date}>
                        <div className={s.title}>Время и дата события*</div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <div className={s.timing}>
                                <input
                                    type="time"
                                    value={start}
                                    onChange={e => {
                                        setStart(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={s.timing}>
                                <input
                                    type="date"
                                    style={{marginLeft: "5px"}}
                                    value={dataStart}
                                    onChange={e => {
                                        setDataStart(e.target.value);
                                    }}
                                />
                            </div>

                        </div>
                        <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                            <div className={s.timing}>
                                <input
                                    type="time"
                                    style={{marginLeft: "5px"}}
                                    value={finish}
                                    onChange={e => {
                                        setFinish(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={s.timing}>
                                <input
                                    type="date"
                                    value={finishedDate}
                                    onChange={e => {
                                        setFinishedDate(e.target.value);
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={s.left}>
                    <div className={s.materials}>
                        <div>
                            <div
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    ref.current.click();
                                }}
                            >
                                <div className={s.title}>Прикрепите материалы</div>
                                <span>По необходимости</span>
                            </div>
                            <span style={{marginTop: "20px", cursor: "pointer"}}>
                <a
                    target="_blank"
                    className={s.link}
                    href={`http://83.220.174.249:5123${link}`}
                >
                  {filename}
                </a>
              </span>
                        </div>
                        <img src={upload} alt=""/>
                        <input
                            ref={ref}
                            type="file"
                            style={{display: "none"}}
                            onChange={e => {
                                setFile("");
                                const file: any = e.target.files;
                                setFile(file);
                            }}
                        />
                    </div>
                    <div className={s.clients}>
                        <div className={s.title}>
                            <img src={e_users} alt="users icon"/>
                            Список клиентов
                        </div>
                        <div className={s.user_items}>
                            { allGroups.length !== 0 && <select
                                value={currentGroup}
                                onChange={e => {
                                    const data = JSON.parse(e.target.value)
                                    setCurrentGroup(e.target.value);
                                    dispatch(setAddUsers(data.users_ids))

                                }}
                            >
                                {allGroups.map(el =>
                                     <option key={el.id} value={JSON.stringify(el)}>
                                        {el.name}
                                    </option>

                                )}
                            </select>}
                            <UserGroup currentGroup={currentGroup}/>
                        </div>
                        <NavLink to={`/profile/clients/add?id=${id}`} className={s.add_btn}>
                            +
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={s.blue_btn} onClick={handleSave}>
                Сохранить
            </div>
        </>
    );
};

export default ChangeEvent;
