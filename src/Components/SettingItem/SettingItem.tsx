import s from "./SettingItem.module.scss";
import fileImg from "../../assets/e_mater.svg";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type Props = {
  tittle: any;
  setTittle: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: any;
  filename: any;
  name: string;
};

const SettingItem = ({
  tittle,
  text,
  filename,
  setText,
  setTittle,
  name,
}: Props) => {
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
          фон заставки
        </div>
        <div className={s.file}>{filename}</div>
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
