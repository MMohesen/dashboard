interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  token: string;
  business: string | null | undefined;
}

export default User;
