import axios from "axios";
import ENDPOINTS from "./end-points";
import Storage from "@/services/storage";

axios.defaults.baseURL = ENDPOINTS.BASE_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers.common["Accept"] = "application/json";
    config.headers.common["access-control-allow-header"] = "*";
    config.headers.common["Access-Control-Allow-Origin"] = "*";
    const token = Storage.get("dashboard_token");
    if (!!token) {
      config.headers.common["X-POS-User-Agent"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (error) => {
    const { response } = error;
    return Promise.reject(response?.data || response);
  }
);

export default axios;
