import axios from "axios";
import ENDPOINTS from "./end-points";
import Vue from "vue";

axios.defaults.baseURL = ENDPOINTS.BASE_URL;

axios.interceptors.request.use(
  (config) => {
    if (Vue.$cookies.get("DASHBOARD_COOKIES")) {
      let { token } = Vue.$cookies.get("DASHBOARD_COOKIES");
      config.headers.common["Authorization"] = `Bearer ${token}`;
      config.headers.common["Accept"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    return Promise.reject(response?.data || response);
  }
);

export default axios;
