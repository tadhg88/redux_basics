import axios from "axios";

export function requestGetUser() {
    return axios.request({
        method: "get",
        url: "http://jsonplaceholder.typicode.com/users",
    });
}