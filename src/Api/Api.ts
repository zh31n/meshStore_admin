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
  editUser(token: string, data: object) {
    return instance.put(`edit-user?token=${token}`, data);
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
  createNetwork(token: string, name: string) {
    return instance.post(`add-network?token=${token}`, { name });
  },
  deleteNetwork(token: string, network: number) {
    return instance.delete(`delete-network/?token=${token}&network=${network}`);
  },
  getAllBeacon(token: string) {
    return instance.get(`beacons?token=${token}`);
  },
  deleteBeacon(token: string, id: number) {
    return instance.delete(`delete-beacon?token=${token}&beacon=${id}`);
  },
  createBeacond(token: string, name: string, uuid: string, network: number) {
    return instance.post(`add-beacon?token=${token}`, { name, uuid, network });
  },
  changeBeacon(token: string, name: string, uuid: string, network: number) {
    return instance.put(`edit-beacon?token=${token}`, {
      name,
      uuid,
      beacon: network,
    });
  },
  changeSettings(token: string, data: object) {
    console.log(data);
    return instance.patch(`update-text?token=${token}`, data);
  },
  allNotifications(token: string) {
    return instance.get(`notifications?token=${token}`);
  },
  addNotification(token: string, data: any) {
    return instance.post(`add-notification?token=${token}`, data);
  },
  getNotification(token: string, id: number) {
    return instance.get(`notification?token=${token}&network=${id}`);
  },
  editNotification(token: string, data: any, id: number) {
    return instance.get(
      `edit-notification?token=${token}&notification=${id}`,
      data
    );
  },
  deleteNotification(token: string, id: number) {
    return instance.delete(
      `delete_notification?token=${token}&notification-id=${id}`
    );
  },
  getUsersGroup(token: string) {
    return instance.get(`user-groups?token=${token}`);
  },
  createUserGroup(token: string, data: object) {
    return instance.post(`add-user-group?token=${token}&network=3`, {
      ...data,
    });
  },
  deleteUserGroup(token: string, id: number) {
    return instance.delete(`delete-user-group?token=${token}&group-id=${id}`);
  },
  changeUserGroup(token: string, id: number, users: number[], name: string) {
    const data = {
      users: [...users],
      name: name,
    };
    return instance.put(`edit-user-group?token=${token}&group-id=${id}`, data);
  },
  changeBackGround(token: string, network: number, data: any) {
    return instance(
      `update-background?token=${token}&network=${network}`,
      data
    );
  },
  findByDate(token: string, date: string) {
    return instance.get(`notifications-date?token=${token}&date=${date}`);
  },
};

export default Api;
