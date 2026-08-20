import axios from "axios";

const apiPort = "5008";
const apiUri = "172.16.36.43";

const localAPi = `http://${apiUri}:${apiPort}`

const externalAPi = null;

const api = axios.create({
    baseURL : localAPi
});

export default api;