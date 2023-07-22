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
type Props = {
  data: UserArray[];
  image: any;
  currentNetwork: string;
  add: boolean;
};

const UserList = ({ data, image, currentNetwork, add }: Props) => {
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
            />
          );
        }
      })}
    </>
  );
};

export default UserList;
