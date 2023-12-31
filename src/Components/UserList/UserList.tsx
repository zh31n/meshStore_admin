import {useTypedSelector} from "../../hooks/useTypedSelector";
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
    const role = useTypedSelector(state => state.user.role);

    return (
        <>
            {role === 2
                ? data.map((u, index) => {
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
                    } else {
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
                })
                : data.map((u, index) => (
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
                ))}
        </>
    );
};

export default UserList;
