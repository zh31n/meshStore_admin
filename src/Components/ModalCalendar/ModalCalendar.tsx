import React, { useState } from "react";
import styles from "./ModalCalendar.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Api from "../../Api/Api";
import EventItemC from "../EventItemC/EventItemC";

type day = {
  len: number;
  notifications: any[];
  result: boolean;
  search_date: string;
};

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentNetwork: number;
};

const ModalCalendar = ({ setModal, currentNetwork }: Props) => {
  const token = useTypedSelector(state => state.user.token);
  const [date, setDate] = useState<string>("");
  const [day, setDay] = useState<day>({
    len: 0,
    notifications: [],
    result: true,
    search_date: "",
  });

  const handleClick = () => {
    Api.findByDate(token, date, String(currentNetwork)).then(res => {
      setDay(res.data);
    });
  };

  return (
    <div className={styles.container} onClick={() => setModal(false)}>
      <div className={styles.main_container} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex" }}>
          <div className={styles.timing}>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <button className={styles.button} onClick={handleClick}>
            Найти
          </button>
        </div>
        <p className={styles.text}>Найдено {day.len} событий</p>
        <div className={styles.event_container}>
          {day.notifications.map((elem, index) => (
            <EventItemC
              id={elem.id}
              key={index}
              length={elem.length.length}
              type={elem.length.measure}
              name={elem.title}
              start={elem.start}
              finish={elem.finish}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalCalendar;
