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
};

const UserList = ({ data, image, currentNetwork }: Props) => {
  return (
    <>
      {data.map((u, index) => {
        if (currentNetwork == u.network) {
          return (
            <UserItemG
              u={u}
              add={false}
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
