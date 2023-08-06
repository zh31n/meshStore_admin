import UserItemG from "../UserItemG/UserItemG";

type UserArray = {
  id: 0;
  name: string;
  email: string;
  phone: string;
  phone_confirmed: number;
  status: string;
  role: string;
  network: string;
  tag: string;
};
type AddedUsers = {
  id: number;
};
type Props = {
  data: UserArray[];
  image: any;
  add: boolean;
  setAddedUsers: any;
  addedUsers: AddedUsers[];
};

const UserListAll = ({
  data,
  image,
  add,
  setAddedUsers,
  addedUsers,
}: Props) => {
  return (
    <>
      {data.map((u, index) => {
        return (
          <UserItemG
            u={u}
            add={add}
            name={u.name}
            key={index}
            id={u.id}
            image={image}
            setAddedUsers={setAddedUsers}
            addedUsers={addedUsers}
          />
        );
      })}
    </>
  );
};

export default UserListAll;
