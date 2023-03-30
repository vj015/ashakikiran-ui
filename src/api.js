import axios from "axios";
export default async function loginuser(data) {
  return await axios.post("http://localhost:8081/auth/login", data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
      "Content-Type": "application/json",
    },
  });
}
