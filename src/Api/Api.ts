import axios from "axios";

const instance = axios.create({
  baseURL: "http://83.220.174.249:5123/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});

const Api = {
  Auth(email: string, password: string) {
    return instance.get(`auth-admin?email=${email}&password=${password}`);
  },
  getUsers(token: string, page: number, perPage: number) {
    return instance.get(
      `users?token=${token}&page=${page}&per-page=${perPage}`
    );
  },
  editUser(token: string, argName: string, userId: number, value: string) {
    return instance.post(`edit-user?token=${token}`, {
      arg_name: argName,
      user_id: userId,
      new_value: value,
    });
  },
  addUser(
    token: string,
    name: string,
    email: string,
    phone: number,
    tagId: string,
    network: string,
    role: string
  ) {
    return instance.post(`add-user?token=${token}`, {
      name,
      email,
      phone,
      tagId,
      network,
      role,
    });
  },
  deleteUser(token: string, user: number) {
    return instance.get(`delete-user?token=${token}&${user}`);
  },
};

export default Api;
