import axios from "axios";
class AuthenticationServices {
  loginuser(data) {
    return axios.post("http://localhost:8081/auth/login", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, PUT, POST, DELETE, PATCH, OPTIONS",
        "Content-Type": "application/json",
      },
    });
  }
  verifyuser(data) {
    return axios.post("http://localhost:8081/auth/verify/" + data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, PUT, POST, DELETE, PATCH, OPTIONS",
        "Content-Type": "application/json",
      },
    });
  }
  registeruser(data) {
    return axios.post("http://localhost:8081/user/create", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, PUT, POST, DELETE, PATCH, OPTIONS",
        "Content-Type": "application/json",
      },
    });
  }
  registerintern(data) {
    return axios.post("http://localhost:8081/intern/create", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, PUT, POST, DELETE, PATCH, OPTIONS",
        "Content-Type": "application/json",
      },
    });
  }
  sendsms(data) {
    return axios.post("http://localhost:8081/message/create", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, PUT, POST, DELETE, PATCH, OPTIONS",
        "Content-Type": "application/json",
      },
    });
  }
}
export default new AuthenticationServices();
