import { cookies } from "next/headers";

// Server action defined inside a Server Component
export default async function GetCookie({ name }) {
  const cookieStore = cookies().get(name).value;
if( cookieStore!= null){

  return cookieStore.slice(1, cookieStore.length - 1);
}
return 0
}
