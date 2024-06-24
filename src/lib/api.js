import axios from "axios";
const api = axios.create({
  // baseURL: "https://api.twelvesprings.uk/api/v2",
  baseURL: "https://springboot-12s-api-7b1aa99b4d9c.herokuapp.com/",
  // baseURL: "http://localhost:8081/",
});
api.interceptors.request.use(
  function (config) {
    console.log("fds", window.location.pathname);
    // Do something before request is sent
    // if (
    //   !localStorage.getItem("noAccessToken") &&
    //   localStorage.getItem("noAccessToken") === null &&
    //   window.location.pathname !== "/login" &&
    //   window.location.pathname !== "/signup"
    // ) {
    //   window.location.href = window.location.origin;
    // } else if (
    //   window.location.pathname === "/login" ||
    //   window.location.pathname === "/signup"
    // ) {
    // } else {
    // config.headers["Authorization"] =
    // "Bearer " + localStorage.getItem("noAccessToken");
    // }
    // let authToken = localStorage.getItem("authorizationToken");
    // if (authToken) {
    //   config.headers["Authorization"] = "Bearer " + authToken;
    // }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response.status == 401) {
    //   localStorage.clear();
    //   window.location.href = "/login";
    // }
    return Promise.reject(error);
  }
);
export const toFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key]);
  });
  return formData;
};
export default api;