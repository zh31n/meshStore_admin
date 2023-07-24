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
  currentNetwork: string;
  add: boolean;
  setAddedUsers: any;
  addedUsers: AddedUsers[];
};

const UserList = ({
  data,
  image,
  currentNetwork,
  add,
  setAddedUsers,
  addedUsers,
}: Props) => {
  // useEffect(() => {
  //     console.log(addedUsers)
  // },[addedUsers])
  return (
    <>
      {data.map((u, index) => {
        if (currentNetwork == u.network) {
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
        }
      })}
    </>
  );
};

export default UserList;
