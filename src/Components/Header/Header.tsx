import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <>
      <div className={s.header}>
        <div className="container">
          <div className={s.header_inner}>
            <div className={s.logo}>meshstore</div>
            <div className={s.nav}>
              <Link
                to={"/profile/today"}
                className={s.navItem}
                style={{ color: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_100_1712)">
                    <path
                      className={s.hovv}
                      d="M20 11C19.7554 9.24023 18.9391 7.60967 17.6766 6.35951C16.4142 5.10934 14.7758 4.30893 13.0137 4.08156C11.2516 3.8542 9.46362 4.21249 7.9252 5.10126C6.38678 5.99002 5.18325 7.35995 4.5 9.00001M4 5.00001V9.00001H8"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      className={s.hovv}
                      d="M4 13C4.28668 15.0682 5.36155 16.9457 7 18.24"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      className={s.hovv}
                      d="M11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H12C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19V20C11 20.2652 11.1054 20.5196 11.2929 20.7071C11.4804 20.8946 11.7348 21 12 21H14"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      className={s.hovv}
                      d="M17 15V17C17 17.2652 17.1054 17.5196 17.2929 17.7071C17.4804 17.8946 17.7348 18 18 18H19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      className={s.hovv}
                      d="M20 15V21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_100_1712">
                      <rect width="24" height="24" fill="" />
                    </clipPath>
                  </defs>
                </svg>
                Сегодня
              </Link>
              <Link className={s.navItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_100_1715)">
                    <path
                      className={s.hovv}
                      d="M4.22266 7C4.22266 6.46957 4.44508 5.96086 4.84099 5.58579C5.2369 5.21071 5.77387 5 6.33377 5H19.0004C19.5603 5 20.0973 5.21071 20.4932 5.58579C20.8891 5.96086 21.1115 6.46957 21.1115 7V19C21.1115 19.5304 20.8891 20.0391 20.4932 20.4142C20.0973 20.7893 19.5603 21 19.0004 21H6.33377C5.77387 21 5.2369 20.7893 4.84099 20.4142C4.44508 20.0391 4.22266 19.5304 4.22266 19V7Z"
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      className={s.hovv}
                      d="M16.8887 3V7"
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.44434 3V7"
                      className={s.hovv}
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.22266 11H21.1115"
                      className={s.hovv}
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.6113 15H12.6669"
                      className={s.hovv}
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      className={s.hovv}
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.667 15V18"
                      className={s.hovv}
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_100_1715">
                      <rect width="25.3333" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Календарь
              </Link>
              <Link className={s.navItem} to={"/profile/clients"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_100_1718)">
                    <path
                      className={s.hovv}
                      d="M3.33398 12C3.33398 13.1819 3.56678 14.3522 4.01907 15.4442C4.47136 16.5361 5.1343 17.5282 5.97002 18.364C6.80575 19.1997 7.7979 19.8626 8.88983 20.3149C9.98176 20.7672 11.1521 21 12.334 21C13.5159 21 14.6862 20.7672 15.7781 20.3149C16.8701 19.8626 17.8622 19.1997 18.6979 18.364C19.5337 17.5282 20.1966 16.5361 20.6489 15.4442C21.1012 14.3522 21.334 13.1819 21.334 12C21.334 10.8181 21.1012 9.64778 20.6489 8.55585C20.1966 7.46392 19.5337 6.47177 18.6979 5.63604C17.8622 4.80031 16.8701 4.13738 15.7781 3.68508C14.6862 3.23279 13.5159 3 12.334 3C11.1521 3 9.98176 3.23279 8.88983 3.68508C7.7979 4.13738 6.80575 4.80031 5.97002 5.63604C5.1343 6.47177 4.47136 7.46392 4.01907 8.55585C3.56678 9.64778 3.33398 10.8181 3.33398 12Z"
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      className={s.hovv}
                      d="M9.33398 10C9.33398 10.7956 9.65005 11.5587 10.2127 12.1213C10.7753 12.6839 11.5383 13 12.334 13C13.1296 13 13.8927 12.6839 14.4553 12.1213C15.0179 11.5587 15.334 10.7956 15.334 10C15.334 9.20435 15.0179 8.44129 14.4553 7.87868C13.8927 7.31607 13.1296 7 12.334 7C11.5383 7 10.7753 7.31607 10.2127 7.87868C9.65005 8.44129 9.33398 9.20435 9.33398 10Z"
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.50195 18.849C6.74946 18.0252 7.25592 17.3032 7.9462 16.79C8.63648 16.2768 9.4738 15.9997 10.334 16H14.334C15.1952 15.9997 16.0336 16.2774 16.7243 16.7918C17.4151 17.3062 17.9214 18.0298 18.168 18.855"
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_100_1718">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.333984)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Клиенты
              </Link>
              <Link className={s.navItem} to={"/profile/setting"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_100_1721)">
                    <path
                      d="M9.33398 12C9.33398 12.7956 9.65005 13.5587 10.2127 14.1213C10.7753 14.6839 11.5383 15 12.334 15C13.1296 15 13.8927 14.6839 14.4553 14.1213C15.0179 13.5587 15.334 12.7956 15.334 12C15.334 11.2044 15.0179 10.4413 14.4553 9.87868C13.8927 9.31607 13.1296 9 12.334 9C11.5383 9 10.7753 9.31607 10.2127 9.87868C9.65005 10.4413 9.33398 11.2044 9.33398 12Z"
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.33398 6H9.83398L12.334 3.5L14.834 6H18.334V9.5L20.834 12L18.334 14.5V18H14.834L12.334 20.5L9.83398 18H6.33398V14.5L3.83398 12L6.33398 9.5V6Z"
                      stroke="#838383"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_100_1721">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.333984)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Настройки
              </Link>
            </div>
            <div className={s.lang}>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Русский</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
