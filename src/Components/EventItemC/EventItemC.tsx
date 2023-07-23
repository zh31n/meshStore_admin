import React from "react";
import s from "./EventItemC.module.scss";
import timeImg from "../../assets/clock.svg";
import { Link } from "react-router-dom";

const EventItemC = props => {
  return (
    <Link to={`/profile/today/${props.id}`} className={s.wrapper}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div className={s.time}>
          <span>{props.length}</span>
          <span className={s.type}>{props.type}</span>
        </div>
        <div className={s.info}>
          <div className={s.name}>{props.name}</div>
          <div className={s.timing}>
            <img src={timeImg} alt={"time image"} />
            <span>{props.time}</span>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M7.19182 10.5976C8.44601 10.5976 9.46273 11.6143 9.46273 12.8685C9.46273 14.1227 8.44601 15.1394 7.19182 15.1394C5.93762 15.1394 4.9209 14.1227 4.9209 12.8685C4.9209 11.6143 5.93762 10.5976 7.19182 10.5976Z"
          stroke="#423BFF"
          stroke-width="1.70319"
        />
        <path
          d="M10.9762 3.02773C9.72196 3.02773 8.70524 4.04445 8.70524 5.29864C8.70524 6.55284 9.72196 7.56956 10.9762 7.56956C12.2303 7.56956 13.2471 6.55284 13.2471 5.29865C13.2471 4.04445 12.2303 3.02773 10.9762 3.02773Z"
          stroke="#423BFF"
          stroke-width="1.70319"
        />
        <path
          d="M8.32648 5.29884L4.54163 5.29883M2.27066 5.29884L1.51367 5.29884"
          stroke="#423BFF"
          stroke-width="1.70319"
          stroke-linecap="round"
        />
        <path
          d="M9.84082 12.8687L13.6257 12.8687M15.8966 12.8687L16.6536 12.8687"
          stroke="#423BFF"
          stroke-width="1.70319"
          stroke-linecap="round"
        />
        <path
          d="M1.51367 12.8687L4.54156 12.8687"
          stroke="#423BFF"
          stroke-width="1.70319"
          stroke-linecap="round"
        />
        <path
          d="M16.6539 5.29883L13.626 5.29883"
          stroke="#423BFF"
          stroke-width="1.70319"
          stroke-linecap="round"
        />
      </svg>
    </Link>
  );
};

export default EventItemC;
