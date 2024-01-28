export interface UserI {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  imageUrl?: string;
}

export interface LoginResponseI {
  access_token: string;
  token_Type: string;
  expires_in: number;
}