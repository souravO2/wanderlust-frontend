import { headers } from "next/headers";
import { auth } from "./auth";

export const tokenFromServer = async () => {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });
  return jwtToken?.token;
};
