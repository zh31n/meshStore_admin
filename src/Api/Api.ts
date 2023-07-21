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
  getUsers(token: string) {
    return instance.get(`users?token=${token}`);
  },
  editUser(token: string, argName: string, userId: number, value: string) {
    return instance.put(`edit-user?token=${token}`, {
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
    network: number,
    role: number
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
    return instance.delete(`delete-user?token=${token}&user=${user}`);
  },
  getNetworks(token: string) {
    return instance.get(`networks?token=${token}`);
  },
  getSettings(token: string) {
    return instance.get(`settings?token=${token}`);
  },
  changeNetwork(token: string, data: object) {
    return instance.put(`edit-network?token=${token}`, data);
  },
  getAllBeacon(token: string) {
    return instance.get(`beacons?token=${token}`);
  },
};

export default Api;
