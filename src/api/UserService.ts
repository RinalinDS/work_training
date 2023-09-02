import axios from "axios";

export class UserService {
  static async getUsers() {
    return axios.get<{username: string, password: string}[]>("./users.json");
  }
}
