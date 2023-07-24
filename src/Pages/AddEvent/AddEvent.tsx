import s from "./AddEvent.module.scss";
import { useEffect, useState, useRef } from "react";
import trash from "../../assets/Trash.svg";
import calend from "../../assets/e_data.svg";
import upload from "../../assets/File_Upload.svg";
import e_users from "../../assets/clients.svg";
import { NavLink } from "react-router-dom";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserGroup from "../../Components/UserGroup/UserGroup";

interface notifications {
  date: string;
  day: number;
  len: number;
  notifications: any[];
}

interface Props {
  setNewArr: React.Dispatch<React.SetStateAction<notifications>>;
}

const AddEvent = ({ setNewArr }: Props) => {
  const ref = useRef<any>();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const [allBeacons, setAllBeacons] = useState<any[]>([]);
  const [allGroups, setAllGroups] = useState<any[]>([]);

  const [currentBeacon, setCurrentBeacon] = useState<number>(1);
  const [currentGroup, setCurrentGroup] = useState<number>(0);

  const [start, setStart] = useState<string>("");
  const [finish, setFinish] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [finishedDate, setFinishedDate] = useState<string>("");

  const [file, setFile] = useState<any>();

  const token = useTypedSelector(state => state.user.token);

  useEffect(() => {
    Api.getAllBeacon(token).then(res => {
      setAllBeacons(res.data.beacons);
      setCurrentBeacon(res.data.beacons[0].id);
    });
    Api.getUsersGroup(token).then(res => {
      setAllGroups(res.data.user_groups);
      setCurrentGroup(res.data.user_groups[0].id);
    });
  }, []);

  const handleSave = () => {
    if (file) {
      const data = {
        beacon: currentBeacon,
        group: currentGroup,
        start: `${date}T${start}`,
        finish: `${finishedDate}T${finish}`,
        title: title,
        text: text,
        file: file[0],
      };

      console.log(data);
      Api.addNotification(token, data).then(res => {
        console.log(res);
        Api.allNotifications(token).then(res => {
          console.log(res.data);
          setNewArr(res.data.notifications[0]);
        });
      });
    } else {
      const data = {
        beacon: currentBeacon,
        group: currentGroup,
        start: `${date}T${start}`,
        finish: `${finishedDate}T${finish}`,
        title: title,
        text: text,
        file: "",
      };

      console.log(data);
      Api.addNotification(token, data).then(res => {
        console.log(res);
        Api.allNotifications(token).then(res => {
          setNewArr(res.data.notifications[0]);
        });
      });
    }
  };

  return (
    <div>
      <div className={s.title}>
        Новое событие для расписания
        <img className={s.trash} src={trash} alt="trash icon" />
      </div>
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
                const value: number = Number(e.target.value);
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
            <div style={{ display: "flex", gap: "10px" }}>
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
                  value={date}
                  onChange={e => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <img
                style={{ marginLeft: "10px" }}
                src={calend}
                alt="calendar icon"
              />
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <div className={s.timing}>
                <input
                  type="time"
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
              <img
                style={{ marginLeft: "10px" }}
                src={calend}
                alt="calendar icon"
              />
            </div>
          </div>
        </div>
        <div className={s.left}>
          <div
            className={s.materials}
            onClick={() => {
              ref.current.click();
            }}
          >
            <div>
              <div className={s.title}>Прикрепите материалы</div>
              <span>По необходимости</span>
            </div>
            <img src={upload} alt="" />
            <input
              ref={ref}
              type="file"
              style={{ display: "none" }}
              onChange={e => {
                setFile([]);
                const files = e.target.files;
                setFile(files);
              }}
            />
          </div>
          <div className={s.clients}>
            <div className={s.title}>
              <img src={e_users} alt="users icon" />
              Список клиентов
            </div>
            <div className={s.user_items}>
              <select
                value={currentGroup}
                onChange={e => {
                  setCurrentGroup(Number(e.target.value));
                }}
              >
                {allGroups.map(el => (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
              <UserGroup currentGroup={currentGroup} />
            </div>
            <NavLink to={"/profile/clients/add"} className={s.add_btn}>
              +
            </NavLink>
          </div>
        </div>
      </div>
      <div className={s.blue_btn} onClick={handleSave}>
        Добавить в расписание
      </div>
    </div>
  );
};

export default AddEvent;
