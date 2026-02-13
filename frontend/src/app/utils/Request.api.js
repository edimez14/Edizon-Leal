import axios from "axios";
// import { configDotenv } from "dotenv";

const DEBUG = `${process.env.NEXT_PUBLIC_DEBUG}` === "true";

/*usar la variable de entorno*/
const api = axios.create({
  baseURL: DEBUG
    ? "http://127.0.0.1:8000/api/"
    : process.env.NEXT_PUBLIC_API_URL,
});

export const BackendRequest = async (typeRequest, url, content = "") => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify(content);

  const reqOptions = {
    url: url,
    method: typeRequest,
    headers: headersList,
    data: bodyContent,
  };

  const response = api.request(reqOptions);
  return response;
};
