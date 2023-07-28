import s from "./PhoneAndText.module.scss";
import SettingItem from "../SettingItem/SettingItem";
import { useState, useEffect } from "react";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Modal from "../Modal/Modal";

const PhoneAndText = () => {
  const token = useTypedSelector(state => state.user.token);

  const [tittleEn, setTittleEn] = useState<string>("");
  const [pathRu, setPathRu] = useState<string>("");
  const [pathEn, setPathEn] = useState<string>("");
  const [tittltRu, setTittltRu] = useState<string>("");
  const [textEn, setTextEn] = useState<string>("");
  const [textRu, setTextRu] = useState<string>("");
  const [filenameRu, setFilenameRu] = useState<string>("");
  const [filenameEn, setFilenameEn] = useState<string>("");
  const [modalView, setModalView] = useState<boolean>(false);
  const [path, setPath] = useState<string>("");
  const [numbers, setNumbers] = useState<string>("");

  useEffect(() => {
    Api.getSettings(token).then(res => {
      console.log(res.data.data);
      setFilenameEn(res.data.data.screensaver_image_en.filename);
      setFilenameRu(res.data.data.screensaver_image_ru.filename);
      setPathEn(res.data.data.screensaver_image_en.link);
      setPathRu(res.data.data.screensaver_image_ru.link);
      setTittleEn(res.data.data.screensaver_text_en.title);
      setTittltRu(res.data.data.screensaver_text_ru.title);
      setTextEn(res.data.data.screensaver_text_en.text);
      setTextRu(res.data.data.screensaver_text_ru.text);
      setNumbers(res.data.data.last_updated);
    });
  }, []);

  return (
    <>
      {modalView && (
        <Modal filepath={path} number={numbers} setModal={setModalView} />
      )}
      <div className={s.cont_i}>
        <div className={s.set_cont}>
          <SettingItem
            tittle={tittltRu}
            text={textRu}
            setPath={setPath}
            filepath={pathRu}
            setText={setTextRu}
            setTittle={setTittltRu}
            filename={filenameRu}
            setState={setPathRu}
            setModal={setModalView}
            setFilename={setFilenameRu}
            name="screensaver-text-ru"
            setNumbers={setNumbers}
            filena="screensaver-image-ru"
          />
        </div>
        <div className={s.line}></div>
        <div className={s.set_cont}>
          <SettingItem
            setNumbers={setNumbers}
            tittle={tittleEn}
            setState={setPathEn}
            setPath={setPath}
            filepath={pathEn}
            setFilename={setFilenameEn}
            text={textEn}
            setModal={setModalView}
            setText={setTextEn}
            setTittle={setTittleEn}
            filename={filenameEn}
            name="screensaver-text-en"
            filena="screensaver-image-en"
          />
        </div>
      </div>
    </>
  );
};

export default PhoneAndText;
