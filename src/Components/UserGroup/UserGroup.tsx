import { useState, useEffect } from "react";
import Api from "../../Api/Api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserItem from "../UserItem/UserItem";

type Props = {
  currentGroup: number;
};

interface group {
  id: number;
  name: string;
  network: string;
  users_ids: number[];
}

const UserGroup = ({ currentGroup }: Props) => {
  const [groups, setGroups] = useState<group[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  const token = useTypedSelector(state => state.user.token);

  useEffect(() => {
    Api.getUsersGroup(token).then(res => {
      setGroups(res.data.user_groups);
    });
    Api.getUsers(token).then(res => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <>
      {groups.map(elem => {
        if (elem.id === currentGroup) {
          return elem.users_ids.map(id => {
            return users.map(el => {
              if (id === el.id) {
                return (
                  <UserItem
                    id={el.id}
                    name={el.name}
                    setAddedUsers={"asd"}
                    addedUsers={[]}
                  />
                );
              }
            });
          });
        }
      })}
    </>
  );
};

export default UserGroup;
