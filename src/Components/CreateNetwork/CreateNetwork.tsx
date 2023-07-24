import { useState, useEffect } from "react";
import s from "./CreateNetwork.module.scss";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type Props = {
  changeNetwork: any;
  setChangeNetwork: any;
  currentNetwor: any;
  setCreateNetwork: any;
  setNetworks: any;
  setCurrentNetwork: any;
};

const CreateNetwork = (props: Props) => {
  const token = useTypedSelector(state => state.user.token);

  const [name, setName] = useState<string>("");

  const [nameone, setNameone] = useState<string>(props.changeNetwork.name);

  const handleSave = () => {
    if (props.changeNetwork == true) {
      const data = {
        network: props.currentNetwor.id,
        name: nameone,
      };
      Api.changeNetwork(token, data).then(res => {
        console.log(res);
        props.setCreateNetwork(false);
        props.setChangeNetwork(false);
        Api.getNetworks(token).then(res => {
          props.setNetworks(res.data.networks);
          props.setCurrentNetwork(res.data.networks[0].name);
        });
      });
    }
    if (props.changeNetwork == false) {
      Api.createNetwork(token, name).then(res => {
        console.log(res);
        props.setCreateNetwork(false);
        props.setChangeNetwork(false);
        Api.getNetworks(token).then(res => {
          props.setNetworks(res.data.networks);
          props.setCurrentNetwork(res.data.networks[0].name);
        });
      });
    }
  };

  const handleDelete = () => {
    Api.deleteNetwork(token, props.currentNetwor.id).then(res => {
      console.log(res);
      props.setCreateNetwork(false);
      props.setChangeNetwork(false);
      Api.getNetworks(token).then(res => {
        props.setNetworks(res.data.networks);
        props.setCurrentNetwork(res.data.networks[0].name);
      });
    });
  };

  useEffect(() => {
    if (props.changeNetwork == true) {
      setNameone(props.currentNetwor.name);
    }
  }, [props.changeNetwork, props.currentNetwor]);

  return (
    <div className={s.container}>
      <p className={s.text}>
        {props.changeNetwork == true
          ? "Изменить текущую сеть"
          : "Создать новую сеть"}
      </p>
      <div className={s.inpt_cont}>
        <p className={s.title}>Название сети*</p>
        {props.changeNetwork == true ? (
          <input
            placeholder="название сети"
            value={nameone}
            onChange={e => {
              setNameone(e.target.value);
            }}
          />
        ) : (
          <input
            placeholder="название сети"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        )}
      </div>
      <div className={s.blue_btn} onClick={handleSave}>
        {props.changeNetwork == true ? "Сохранить" : "Создать сеть"}
      </div>
      {props.changeNetwork == true && (
        <div className={s.red_btn} onClick={handleDelete}>
          Удалить
        </div>
      )}
    </div>
  );
};

export default CreateNetwork;
