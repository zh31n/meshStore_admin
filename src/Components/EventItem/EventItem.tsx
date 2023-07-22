import React from "react";
import s from "./EventItem.module.scss";
import timeImg from "../../assets/clock.svg";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  length: number;
  type: string;
  name: string;
  time: string;
}

const EventItem = ({ id, length, type, name, time }: Props) => {
  return (
    <Link to={`/profile/today/${id}`} className={s.wrapper}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div className={s.time}>
          <span>{length}</span>
          <span className={s.type}>{type}</span>
        </div>
        <div className={s.info}>
          <div className={s.name}>{name}</div>
          <div className={s.timing}>
            <img src={timeImg} alt={"time image"} />
            <span>{time}</span>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="34"
        viewBox="0 0 35 34"
        fill="none"
      >
        <g clip-path="url(#clip0_96_1375)">
          <path
            className={s.arrow}
            d="M17.1613 2.94531C16.8545 2.94531 16.5532 2.94813 16.2576 2.95235L15.3905 2.97628L14.9696 2.99458L14.1546 3.04244L13.3762 3.10719C6.64065 3.76033 3.89998 6.501 3.24684 13.2365L3.18209 14.015L3.13423 14.83C3.12719 14.9679 3.12015 15.1087 3.11593 15.2509L3.092 16.118L3.08637 16.5656L3.08496 17.0217C3.08496 17.3285 3.08778 17.6298 3.092 17.9254L3.11593 18.7925L3.13423 19.2134L3.18209 20.0284L3.24684 20.8068C3.89998 27.5424 6.64065 30.283 13.3762 30.9362L14.1546 31.0009L14.9696 31.0488C15.1076 31.0558 15.2483 31.0629 15.3905 31.0671L16.2576 31.091L17.1613 31.098L18.065 31.091L18.9321 31.0671L19.353 31.0488L20.168 31.0009L20.9465 30.9362C27.682 30.283 30.4227 27.5424 31.0758 20.8068L31.1406 20.0284L31.1884 19.2134C31.1955 19.0754 31.2025 18.9347 31.2067 18.7925L31.2307 17.9254L31.2377 17.0217L31.2307 16.118L31.2067 15.2509L31.1884 14.83L31.1406 14.015L31.0758 13.2365C30.4227 6.501 27.682 3.76033 20.9465 3.10719L20.168 3.04244L19.353 2.99458C19.2128 2.98773 19.0725 2.98163 18.9321 2.97628L18.065 2.95235L17.6174 2.94672L17.1613 2.94531ZM14.7585 11.8036C15.0009 11.5612 15.3234 11.4156 15.6655 11.3941C16.0076 11.3726 16.3457 11.4766 16.6166 11.6867L16.7489 11.8036L20.9718 16.0265C21.2142 16.2689 21.3598 16.5914 21.3813 16.9334C21.4028 17.2755 21.2987 17.6137 21.0886 17.8846L20.9718 18.0169L16.7489 22.2398C16.4956 22.4922 16.1557 22.6388 15.7982 22.6497C15.4407 22.6606 15.0925 22.5351 14.8243 22.2986C14.556 22.062 14.3879 21.7323 14.3539 21.3762C14.32 21.0202 14.4229 20.6646 14.6417 20.3817L14.7585 20.2494L17.9848 17.0217L14.7585 13.794C14.5161 13.5516 14.3705 13.2291 14.349 12.887C14.3275 12.5449 14.4316 12.2067 14.6417 11.9359L14.7585 11.8036Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_96_1375">
            <rect
              width="33.7833"
              height="33.7833"
              fill="white"
              transform="translate(0.269531 0.130035)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default EventItem;
