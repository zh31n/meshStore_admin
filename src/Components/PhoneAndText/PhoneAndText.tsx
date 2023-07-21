import s from "./PhoneAndText.module.scss";
import SettingItem from "../SettingItem/SettingItem";
import { useState, useEffect } from "react";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PhoneAndText = () => {
  const [settings, setSettings] = useState<any>({});

  const token = useTypedSelector(state => state.user.token);

  const [tittleEn, setTittleEn] = useState<string>("");
  const [tittltRu, setTittltRu] = useState<string>("");
  const [textEn, setTextEn] = useState<string>("");
  const [textRu, setTextRu] = useState<string>("");
  const [filenameRu, setFilenameRu] = useState<string>("");
  const [filenameEn, setFilenameEn] = useState<string>("");

  useEffect(() => {
    Api.getSettings(token).then(res => {
      setSettings(res.data.data);
      console.log(res.data.data);
      setFilenameEn(res.data.data.screensaver_text_en.filename);
      setFilenameRu(res.data.data.screensaver_text_ru.filename);
      setTittleEn(res.data.data.screensaver_text_en.title);
      setTittltRu(res.data.data.screensaver_text_ru.title);
      setTextEn(res.data.data.screensaver_text_en.text);
      setTextRu(res.data.data.screensaver_text_ru.text);
    });
  }, []);

  return (
    <div className={s.cont_i}>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <SettingItem
          tittle={tittltRu}
          text={textRu}
          setText={setTextRu}
          setTittle={setTittltRu}
          filename={filenameRu}
        />
      </div>
      <div className={s.line}></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <SettingItem
          tittle={tittleEn}
          text={textEn}
          setText={setTextEn}
          setTittle={setTittleEn}
          filename={filenameEn}
        />
      </div>
    </div>
  );
};

export default PhoneAndText;
