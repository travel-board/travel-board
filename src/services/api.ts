import axios from "axios";

export interface User {
  email: string;
  name: string;
  id: number;
}

export interface Session {
  accessToken: string;
  user: User;
}

export const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 3000,
});

export async function login(email: string, password: string): Promise<Session> {
  const response = await api.post("/login", { email, password });
  return response.data as Session;
}
export function getUser(token: string, userId: string) {
  throw new Error("Function not implemented.");
}

