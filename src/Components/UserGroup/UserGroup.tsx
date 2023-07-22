import { useState, useEffect } from "react";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserItem from "../UserItem/UserItem";

type Props = {};

const UserGroup = (props: Props) => {
  const [groups, setGroups] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  const token = useTypedSelector(state => state.user.token);

  useEffect(() => {
    Api.getUsersGroup(token).then(res => {
      // setGroups(res.data.user-groups);
      console.log(res.data);
    });
    Api.getUsers(token).then(res => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <>
      <UserItem name="Иван" />
    </>
  );
};

export default UserGroup;
