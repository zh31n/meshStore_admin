import { useState, useEffect } from "react";
import s from "./CreateNetwork.module.scss";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type Props = {
  setNetworks: any;
  setCurrentNetwork: any;
  changeNetwork: boolean;
  currentNetwork: string;
  setChangeNetwork: any;
};

const CreateNetwork = ({
  setCurrentNetwork,
  setNetworks,
  changeNetwork,
  currentNetwork,
  setChangeNetwork,
}: Props) => {
  const token = useTypedSelector(state => state.user.token);

  const [name, setName] = useState<string>("");

  const [nameone, setNameone] = useState<string>("");

  const [id, setId] = useState<number>(0);

  const handleSave = () => {
    if (changeNetwork === true) {
      const data = {
        name: name,
        network: id,
      };
      Api.changeNetwork(token, data).then(res => {
        console.log(res.data);
        setName("");
        Api.getNetworks(token).then(res => {
          setNetworks(res.data.networks);
          setCurrentNetwork(res.data.networks[0].name);
          setChangeNetwork(false);
        });
      });
    } else {
      Api.createNetwork(token, nameone).then(res => {
        console.log(res.data);
        setNameone("");
        Api.getNetworks(token).then(res => {
          setNetworks(res.data.networks);
          setCurrentNetwork(res.data.networks[0].name);
          setChangeNetwork(false);
        });
      });
    }
  };

  const handleDelete = () => {
    Api.deleteNetwork(token, id).then(res => {
      console.log(res.data);
      Api.getNetworks(token).then(res => {
        setNetworks(res.data.networks);
        setCurrentNetwork(res.data.networks[0].name);
        setChangeNetwork(false);
      });
    });
  };

  useEffect(() => {
    Api.getNetworks(token).then(res => {
      res.data.networks.map((el: any) => {
        if (el.name === currentNetwork) {
          setName(el.name);
          setId(el.id);
        }
      });
    });
  }, [changeNetwork, currentNetwork]);

  return (
    <div className={s.container}>
      <p className={s.text}>
        {changeNetwork ? "Изменить" : "Создать новую"} сеть
      </p>
      <div className={s.inpt_cont}>
        <p className={s.title}>Название сети*</p>
        <input
          placeholder="название сети"
          value={changeNetwork ? name : nameone}
          onChange={e => {
            if (changeNetwork == true) {
              setName(e.target.value);
            } else {
              setNameone(e.target.value);
            }
          }}
        />
      </div>
      <div className={s.blue_btn} onClick={handleSave}>
        {changeNetwork ? "Изменить" : "Создать"} сеть
      </div>
      {changeNetwork && (
        <div className={s.red_btn} onClick={handleDelete}>
          Удалить
        </div>
      )}
    </div>
  );
};

export default CreateNetwork;
