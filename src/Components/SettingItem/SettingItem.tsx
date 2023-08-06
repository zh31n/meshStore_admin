import s from "./SettingItem.module.scss";
import fileImg from "../../assets/e_mater.svg";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useRef } from "react";

type Props = {
  tittle: any;
  setTittle: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: any;
  filename: any;
  name: string;
  apifilename: string;
  path: string;
  numbers: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
};

const SettingItem = ({
  tittle,
  text,
  filename,
  setNumber,
  setFileName,
  setPath,
  setText,
  setTittle,
  name,
  numbers,
  apifilename,
  path,
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
      Api.getSettings(token).then(res => {
        if (apifilename === "screensaver-image-ru") {
          setPath(res.data.data.screensaver_image_ru.link);
          setFileName(res.data.data.screensaver_image_ru.filename);
        } else {
          setPath(res.data.data.screensaver_image_en.link);
          setFileName(res.data.data.screensaver_image_en.filename);
        }
        setNumber(res.data.data.last_updated);
      });
    });
  };

  return (
    <div className={s.set_item}>
      <div className={s.header}>
        <div
          className={s.title}
          onClick={() => {
            ref.current.click();
          }}
        >
          <img src={fileImg} alt="file icon" />
          фон заставки
        </div>
        <input
          ref={ref}
          type="file"
          style={{ display: "none" }}
          onChange={e => {
            const data = new FormData();
            const file: any = e.target.files;

            data.append("name", apifilename);
            data.append("file", file[0]);

            Api.changeBackGround(token, 1, data).then(res => {
              console.log(res.data);
            });
          }}
        />
        <div className={s.file}>
          <a href={`http://83.220.174.249:5123${path}?u=${numbers}`}>
            {filename}
          </a>
        </div>
      </div>
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
