export class User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  accessToken: string;
  refreshToken: string;
  expries: number;
}
