import s from "./PhoneAndText.module.scss";
import SettingItem from "../SettingItem/SettingItem";
import { useState, useEffect } from "react";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PhoneAndText = ({ network }: { network: number }) => {
  const token = useTypedSelector(state => state.user.token);

  const [tittleEn, setTittleEn] = useState<string>("");
  const [tittltRu, setTittltRu] = useState<string>("");
  const [textEn, setTextEn] = useState<string>("");
  const [textRu, setTextRu] = useState<string>("");
  const [filenameRu, setFilenameRu] = useState<string>("");
  const [filenameEn, setFilenameEn] = useState<string>("");
  const [filepathRu, setFilepathRu] = useState<string>("");
  const [filepathEn, setFilepathEn] = useState<string>("");
  const [numbers, setNumbers] = useState<string>("");

  useEffect(() => {
    Api.getSettings(token, network).then(res => {
      setFilenameEn(res.data.data.screensaver_image_en.filename);
      setFilenameRu(res.data.data.screensaver_image_ru.filename);
      setFilepathRu(res.data.data.screensaver_image_ru.link);
      setFilepathEn(res.data.data.screensaver_image_en.link);
      setTittleEn(res.data.data.screensaver_text_en.title);
      setTittltRu(res.data.data.screensaver_text_ru.title);
      setTextEn(res.data.data.screensaver_text_en.text);
      setTextRu(res.data.data.screensaver_text_ru.text);
      setNumbers(res.data.data.last_updated);
    });
  }, [network]);

  return (
    <div className={s.cont_i}>
      <div className={s.cont_inf}>
        <div className={s.set_cont}>
          <SettingItem
            tittle={tittltRu}
            path={filepathRu}
            text={textRu}
            setText={setTextRu}
            setTittle={setTittltRu}
            filename={filenameRu}
            numbers={numbers}
            setNumber={setNumbers}
            setPath={setFilepathRu}
            setFileName={setFilenameRu}
            name="screensaver-text-ru"
            apifilename="screensaver-image-ru"
          />
        </div>
        <div className={s.line}></div>
        <div className={s.set_cont}>
          <SettingItem
            tittle={tittleEn}
            path={filepathEn}
            text={textEn}
            setText={setTextEn}
            setTittle={setTittleEn}
            filename={filenameEn}
            setNumber={setNumbers}
            setPath={setFilepathEn}
            setFileName={setFilepathEn}
            numbers={numbers}
            name="screensaver-text-en"
            apifilename="screensaver-image-en"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneAndText;
