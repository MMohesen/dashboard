interface UserInterface {
  id?: string;
  email: string;
  password?: string;
  sub_domain?: string;
  first_name?: string;
  last_name?: string;
  permissions?: [];
}
interface SessionInterface {
  token: string;
  user: UserInterface;
}
interface UserSession {
  getUser(): Object;
  getPermissions(): any[];
  getToken(): String;
}

export { UserInterface, SessionInterface, UserSession };
