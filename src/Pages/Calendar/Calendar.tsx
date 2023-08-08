import { useEffect, useState } from "react";
import s from "./Calendar.module.scss";
import { Link } from "react-router-dom";
import EventItemC from "../../Components/EventItemC/EventItemC";
import whiteBtn from "../../assets/white_btn.svg";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ModalCalendar from "../../Components/ModalCalendar/ModalCalendar";

interface Calendar {
  date: string;
  day: number;
  len: number;
  notifications: any[];
}

const Calendar = () => {
  const [modalVis, setModalVis] = useState<boolean>(false);

  const [calendarArr, setCalendarArr] = useState<Calendar[]>([]);

  const [networks, setNetworks] = useState<any[]>([]);
  const [currentNetwork, setCurrentNetwork] = useState<number>(0);

  const [day, setDay] = useState<number>(1);

  const [nextDat, setNextDay] = useState<number>(2);

  const token = useTypedSelector(state => state.user.token);
  const role = useTypedSelector(state => state.user.role);

  useEffect(() => {
    Api.getNetworks(token).then(res => {
      setNetworks(res.data.networks);

      res.data.networks.lenght !== 0 &&
        setCurrentNetwork(res.data.networks[0].id);
    });
  }, []);
  useEffect(() => {
    Api.allNotifications(token, currentNetwork).then(res => {
      setCalendarArr(res.data.notifications);
    });
  }, [currentNetwork]);

  return (
    <>
      <div className={s.btns}>
        {modalVis && (
          <ModalCalendar
            setModal={setModalVis}
            currentNetwork={currentNetwork}
          />
        )}
        <img
          src={whiteBtn}
          alt=""
          onClick={() => {
            if (day >= 3) {
              setDay(day - 2);
              setNextDay(nextDat - 2);
            }
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="white"
          stroke="white"
          onClick={() => {
            setDay(day + 2);
            setNextDay(nextDat + 2);
          }}
        >
          <g clip-path="url(#clip0_101_3051)">
            <path
              d="M26.9535 4.34106C26.4803 4.34106 26.0158 4.34541 25.56 4.35192L24.2229 4.38882L23.5739 4.41703L22.3172 4.49083L21.1169 4.59068C10.7308 5.59781 6.50479 9.82385 5.49766 20.2099L5.39781 21.4102L5.32402 22.667C5.31316 22.8797 5.30231 23.0967 5.2958 23.3159L5.2589 24.653L5.25022 25.3432L5.24805 26.0465C5.24805 26.5197 5.25239 26.9842 5.2589 27.44L5.2958 28.777L5.32402 29.426L5.39781 30.6828L5.49766 31.8831C6.50479 42.2691 10.7308 46.4952 21.1169 47.5023L22.3172 47.6021L23.5739 47.6759C23.7866 47.6868 24.0037 47.6977 24.2229 47.7042L25.56 47.7411L26.9535 47.7519L28.347 47.7411L29.684 47.7042L30.333 47.6759L31.5898 47.6021L32.7901 47.5023C43.1761 46.4952 47.4022 42.2691 48.4093 31.8831L48.5091 30.6828L48.5829 29.426C48.5938 29.2133 48.6046 28.9963 48.6111 28.777L48.648 27.44L48.6589 26.0465L48.648 24.653L48.6111 23.3159L48.5829 22.667L48.5091 21.4102L48.4093 20.2099C47.4022 9.82385 43.1761 5.59781 32.7901 4.59068L31.5898 4.49083L30.333 4.41703C30.1167 4.40647 29.9004 4.39707 29.684 4.38882L28.347 4.35192L27.6567 4.34323L26.9535 4.34106ZM23.2484 18.0003C23.6221 17.6266 24.1194 17.4021 24.6469 17.3689C25.1744 17.3357 25.6959 17.4962 26.1135 17.8201L26.3175 18.0003L32.8291 24.5119C33.2028 24.8857 33.4273 25.3829 33.4605 25.9104C33.4937 26.4379 33.3332 26.9594 33.0093 27.377L32.8291 27.5811L26.3175 34.0927C25.9269 34.482 25.4028 34.708 24.8516 34.7248C24.3003 34.7416 23.7634 34.548 23.3498 34.1833C22.9361 33.8186 22.6768 33.3101 22.6245 32.7611C22.5722 32.2121 22.7309 31.6638 23.0682 31.2276L23.2484 31.0235L28.2232 26.0465L23.2484 21.0694C22.8746 20.6957 22.6501 20.1984 22.617 19.6709C22.5838 19.1434 22.7442 18.6219 23.0682 18.2043L23.2484 18.0003Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_101_3051">
              <rect
                width="52.093"
                height="52.093"
                fill="white"
                transform="translate(0.907227)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={s.container}>
        <div className={s.button} onClick={() => setModalVis(true)}>
          Поиск по дате
        </div>
        {role === 2 && (
          <div className={s.select}>
            <select
              value={currentNetwork}
              onChange={e => setCurrentNetwork(Number(e.target.value))}
            >
              {networks.map(el => (
                <option value={el.id}>{el.name}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className={s.cont}>
        {calendarArr.map((el, index) => {
          if (day == el.day) {
            return (
              <div className={s.cont_day} key={index}>
                <div className={s.header}>
                  <div className={s.info}>
                    <div className={s.count}>
                      Найдено событий: {el.notifications.length}
                    </div>
                    <div className={s.day}>{el.date}</div>
                  </div>
                </div>
                <div className={s.calend_i}>
                  {el.notifications.map(elem => (
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
                <Link to={"/profile/today/add"} className={s.btn}>
                  +
                </Link>
              </div>
            );
          }
        })}
        {calendarArr.map((el, index) => {
          if (el.day == nextDat) {
            return (
              <div className={s.cont_day} key={index}>
                <div className={s.header}>
                  <div className={s.info}>
                    <div className={s.count}>
                      Найдено событий: {el.notifications.length}
                    </div>
                    <div className={s.day}>{el.date}</div>
                  </div>
                </div>
                <div className={s.calend_i}>
                  {el.notifications.map((elem, index) => {
                    if (nextDat == el.day) {
                      return (
                        <EventItemC
                          id={elem.id}
                          key={index}
                          length={elem.length.length}
                          type={elem.length.measure}
                          name={elem.title}
                          start={elem.start}
                          finish={elem.finish}
                        />
                      );
                    }
                  })}
                </div>
                <Link to={"/profile/today/add"} className={s.btn}>
                  +
                </Link>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Calendar;
