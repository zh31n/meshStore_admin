import { useState, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Api from "../../Api/Api";
import UserItemEvent from "./UserItemEvent/UserItemEvent";

interface users {
  email: string;
  id: number;
  name: string;
  network: string;
  phone: string;
  phone_confirmed: number;
  role: string;
  status: string;
  tag: string;
}

interface Props {
  currentNetwork: string;
}

const UserListEvent = ({ currentNetwork }: Props) => {
  const token = useTypedSelector(state => state.user.token);

  const [users, setUsers] = useState<users[]>([]);

  useEffect(() => {
    Api.getUsers(token).then(res => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <>
      {users.map(el => {
        if (el.network === currentNetwork) {
          return <UserItemEvent id={el.id} name={el.name} />;
        }
      })}
    </>
  );
};

export default UserListEvent;
