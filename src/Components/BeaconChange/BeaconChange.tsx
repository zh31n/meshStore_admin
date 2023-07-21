import { useEffect, useState } from "react";
import ava_img from "../../assets/More_btnsvg.svg";
import s from "./BeaconChange.module.scss";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import trash from "../../assets/trash.png";

interface Beacon {
  id: number;
  network: string;
  name: string;
  uuid: string;
}

const BeaconChange = () => {
  const [beaconContainer, setBeaconContainer] = useState<any[]>([]);

  const [change, setChange] = useState<boolean>(false);
  const [currentBeacon, setCurrentBeacon] = useState<Beacon>({
    id: 0,
    name: "",
    network: "",
    uuid: "",
  });
  const [allNetworks, setAllNetworks] = useState<any[]>([]);

  const [uuid, setUuid] = useState("");
  const [name, setName] = useState("");
  const [network, setNetwork] = useState("");

  const token = useTypedSelector(state => state.user.token);

  const handleDelete = () => {
    const id = currentBeacon.id;
    Api.deleteBeacon(token, id).then(res => {
      console.log(res);
      setChange(false);
      setName("");
      setNetwork("");
      setUuid("");
      Api.getAllBeacon(token).then(res => {
        setBeaconContainer(res.data.beacons);
        console.log(res.data.beacons);
      });
    });
  };

  const handleClick = () => {
    let id = 0;
    allNetworks.map(el => {
      if (el.name === network) {
        id = el.id;
      }
    });

    if (change === false) {
      Api.createBeacond(token, name, uuid, id).then(res => {
        console.log(res);
        Api.getAllBeacon(token).then(res => {
          setBeaconContainer(res.data.beacons);
          console.log(res.data.beacons);
        });
      });
    }

    if (change === true) {
      Api.changeBeacon(token, name, uuid, id).then(res => {
        console.log(res);
        Api.getAllBeacon(token).then(res => {
          setBeaconContainer(res.data.beacons);
          console.log(res.data.beacons);
        });
      });
    }

    console.log(id);
  };

  useEffect(() => {
    Api.getAllBeacon(token).then(res => {
      setBeaconContainer(res.data.beacons);
      console.log(res.data.beacons);
    });
    Api.getNetworks(token).then(res => {
      setAllNetworks(res.data.networks);
      setNetwork(allNetworks[0].name);
    });
  }, []);

  return (
    <div className={s.main_container}>
      <div className={s.left_container}>
        {beaconContainer.map((el, index) => (
          <div key={index} className={s.item_container}>
            <div>
              <div>НС</div>
              {el.name}
            </div>
            <img
              src={ava_img}
              onClick={() => {
                setChange(true);
                setCurrentBeacon(el);
                setName(el.name);
                setUuid(el.uuid);
                setNetwork(el.network);
              }}
            />
          </div>
        ))}
      </div>
      <div className={s.right_container}>
        <div className={s.container}>
          {change ? <p>Внести изменения</p> : <p>Добавить новый маячок</p>}
          {change && <img src={trash} onClick={handleDelete} />}
        </div>
        <div className={s.input_containers}>
          <div className={s.input_container}>
            <p>UUID</p>
            <input
              value={uuid}
              onChange={e => {
                setUuid(e.target.value);
              }}
              placeholder="550e8400-e29b-41d4-a716-446655440000"
            />
          </div>
          <div className={s.input_container}>
            <p>Название сети</p>
            <select
              value={network}
              onChange={e => {
                setNetwork(e.target.value);
              }}
            >
              {allNetworks.map((el, index) => (
                <option key={index} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className={s.input_container}>
            <p>Название маячка</p>
            <input
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              placeholder="Название"
            />
          </div>
        </div>
        <div className={s.btn} onClick={handleClick}>
          {change ? "Обновить информация" : "Добавить маячок"}
        </div>
      </div>
    </div>
  );
};

export default BeaconChange;