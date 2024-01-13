import axios from "axios";

export function requestGetUser() {
    return axios.request({
        method: "get",
        url: "http://jsonplaceholder.typicode.com/users",
    });
}

export function requestUserTodo(value) {

    const url = "https://jsonplaceholder.typicode.com/todos/" + value;
    console.log('requestUserTodo - url: ', url);
    return axios.request({
        method: "get",
        url: url
    });
}