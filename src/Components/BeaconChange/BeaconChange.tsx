import React, { useEffect, useState } from "react";
import s from "./BeaconChange.module.scss";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import beacon from "../../assets/beacon.png";

type Props = {};

const BeaconChange = (props: Props) => {
  const [beaconContainer, setBeaconContainer] = useState<any[]>([]);

  const token = useTypedSelector(state => state.user.token);

  useEffect(() => {
    Api.getAllBeacon(token).then(res => {
      console.log(res.data.beacons);
      setBeaconContainer(res.data.beacons);
    });
  }, []);

  return (
    <div className={s.main_container}>
      <div className={s.left_container}>
        {beaconContainer.map((el, index) => (
          <div key={index}>
            <div>
              <img src={beacon} />
            </div>
          </div>
        ))}
      </div>
      <div className={s.right_container}></div>
    </div>
  );
};

export default BeaconChange;
