import { UserSession, SessionInterface } from "@/interface/user.interface.ts";

/**
 * @example const session = new SessionModel(response);
 * @private {token, id, email, first_name, last_name, permissions}
 * @public getUser(): Object
 * @public getToken(): String
 * @public getPermissions(): any[]
 */
export default class SessionModel implements UserSession {
  private token: string = "";
  private id: string = "";
  private email: string = "";
  private first_name: string = "";
  private last_name: string = "";
  private permissions: any[] = [];

  constructor(response: SessionInterface) {
    this.id = response.user.id || "";
    this.token = response.token || "";
    this.email = response.user.email;
    this.first_name = response.user.first_name || "";
    this.last_name = response.user.last_name || "";
    this.permissions = response.user.permissions || [];
  }

  public getUser(): Object {
    return {
      id: this.id,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
    };
  }

  public getToken(): String {
    return this.token;
  }

  public getPermissions(): any[] {
    return this.permissions;
  }
}
