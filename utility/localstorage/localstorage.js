//local storage  to implement cookies next time
'use client'
export function SetLogin() {
  return localStorage.setItem("login", true);
}

export function GetLogin() {

  const token = localStorage.getItem("token");
  return token;
}

export function ClearLogin() {
  return localStorage.removeItem("token");
}
