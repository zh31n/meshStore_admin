import s from "./SettingItem.module.scss";
import fileImg from "../../assets/e_mater.svg";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import React, { useRef } from "react";

type Props = {
  tittle: any;
  setTittle: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: any;
  filename: any;
  setFilename: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  filena: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  filepath: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNumbers: React.Dispatch<React.SetStateAction<string>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const SettingItem = ({
  tittle,
  filena,
  text,
  filename,
  setText,
  setTittle,
  name,
  setModal,
  setNumbers,
  setState,
  setFilename,
  setPath,
  filepath,
}: Props) => {
  const ref = useRef<any>();

  const token = useTypedSelector(state => state.user.token);

  const handleSave = () => {
    const data = {
      name,
      title: tittle,
      text: text,
    };
    Api.changeSettings(token, data).then(res => {
      console.log(res);
    });
  };

  return (
    <div className={s.set_item}>
      <div className={s.header}>
        <div className={s.title}>
          <img src={fileImg} alt="file icon" />
          <p
            onClick={() => {
              ref.current.click();
            }}
          >
            фон заставки
          </p>
        </div>
        <div
          className={s.file}
          onClick={() => {
            setPath(filepath);
            setModal(true);
          }}
        >
          {filename}
        </div>
      </div>
      <input
        style={{ display: "none" }}
        ref={ref}
        type="file"
        onChange={e => {
          console.log(e.target.files);
          const datee = new FormData();
          const file: any = e.target.files;
          datee.append("name", String(filena));
          datee.append("file", file[0]);
          console.log(datee);
          Api.changeBackground(token, datee).then(res => {
            console.log(res.data);
            Api.getSettings(token).then(res => {
              setNumbers(res.data.data.last_updated);
              if (filena === "screensaver-image-en") {
                setFilename(res.data.data.screensaver_image_en.filename);
                setState(res.data.data.screensaver_image_en.link);
              }
              if (filena === "screensaver-image-ru") {
                setFilename(res.data.data.screensaver_image_ru.filename);
                setState(res.data.data.screensaver_image_ru.link);
              }
            });
          });
        }}
      />
      <div className={s.main}>
        <div
          className={s.title}
          onClick={() => {
            console.log(tittle, text);
          }}
        >
          Текст для экрана заставки
        </div>
        <input
          value={tittle}
          onChange={e => {
            setTittle(e.target.value);
          }}
          type="text"
          placeholder={"Заголовок"}
        />
        <textarea
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
          placeholder={"Основной текст для заставки"}
        />
      </div>
      <div className={s.btn} onClick={handleSave}>
        Сохранить
      </div>
    </div>
  );
};

export default SettingItem;
