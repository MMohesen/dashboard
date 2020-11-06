import User from "@/interface/user.interface";
class Users implements User {
  id: number = 0;
  email: string = "";
  password: string = "";
  username: string = "";
  token: string = "";
}

export default Users;
