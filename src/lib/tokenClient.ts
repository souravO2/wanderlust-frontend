import { authClient } from "./auth-client";

export const tokenFromClient = async () => {
  const { data, error } = await authClient.token();
  return data?.token;
};
