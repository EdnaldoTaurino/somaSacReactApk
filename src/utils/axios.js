import axios from "axios";
// config
import { HOST_API } from "./config";
// Contexts
import AsyncStorage from "@react-native-async-storage/async-storage";
// ----------------------------------------------------------------------

const instance = axios.create({ baseURL: HOST_API });

instance.interceptors.request.use(async function (config) {
  const authDataSerialized = await AsyncStorage.getItem("@AuthData");
  const _authData = JSON.parse(authDataSerialized);

  config.headers["Authorization"] = _authData
    ? `Bearer ${_authData.token}`
    : "";
  return config;
});

export default instance;
