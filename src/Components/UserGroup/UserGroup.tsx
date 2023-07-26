import { useState, useEffect } from "react";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserItem from "../UserItem/UserItem";

type Props = {
  currentGroup: number;
};

const UserGroup = ({}: Props) => {
  const [users, setUsers] = useState<any[]>([]);

  const token = useTypedSelector(state => state.user.token);

  const usersIds = useTypedSelector(state => state.addUsers.users);

  useEffect(() => {
    Api.getUsers(token).then(res => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <>
      {usersIds.map(el => {
        return users.map(elem => {
          if (elem.id === el) {
            return (
              <UserItem
                id={elem.id}
                key={elem.id}
                name={elem.name}
                setAddedUsers={"asd"}
                addedUsers={[]}
              />
            );
          }
        });
      })}
    </>
  );
};

export default UserGroup;
