import axios from "axios";

const client = axios.create({
  baseURL: "https://admin.naxa.com.np",
  headers: {
    "Content-Type": "application/json",
  },
});

export const request = (options) => client(options).then((res) => res.data);
