import { GetData } from "@/utility/localstorage/localstorage";
import { cookies } from "next/dist/client/components/headers";

const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: process.env.baseUrl,
});

export default async function GetEvent({ token }) {
  const req = await instance({
    method: "get",
    url: "/events/getevents",
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
  return req;
}
