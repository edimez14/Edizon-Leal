import axios from "axios";

const DEBUG = false;
const api = axios.create({
    baseURL: !DEBUG ? 'http://127.0.0.1:8000/api/' : 'http://127.0.0.1:8000/api/',
});

export const BackendRequest = async (typeRequest, url, content = "") => {
    const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    const bodyContent = JSON.stringify(content);

    const reqOptions = {
        url: url,
        method: typeRequest,
        headers: headersList,
        data: bodyContent,
    }

    const response = api.request(reqOptions);
    return response;
};
