import { SetLogin, Setdata } from "@/utility/localstorage/localstorage";
import axios from "axios";
//creating axios instace
const instance = axios.create({
  baseURL: process.env.baseUrl,
});

//signin/login service
export async function SigninService(body) {
  try {
    const req = await instance({
      url: "/auth/login",
      method: "post",
      data: {
        email: body.email,
        password: body.password,
      },
      withCredentials: true,
    }).catch((err) => {
      return err;
    });
    if (req.status == 401) {
      return req.status;
    }
    SetLogin();
    return req.status;
  } catch (error) {
    console.log(error);
  }
}

//register/signup service
export async function SiginupService(body) {
  const req = await instance({
    method: "post",
    url: "/auth/register/",
    data: body,
  })
    .then((data) => {
      return data.status;
    })
    .catch((err) => {
      return err.status;
    });
  return req;
}

export async function Logout() {
  const req = await instance(
    {
      method: "get",
      url: "/auth/logout",
      withCredentials:true
    },
    
  )
    .then((data) => {
      return data.status;
    })
    .catch((err) => {
      return err;
    })
    .finally((data) => {
      return data;
    });

  return req;
}
