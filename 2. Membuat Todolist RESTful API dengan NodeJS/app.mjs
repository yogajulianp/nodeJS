import http from "http";
import {TodolistService} from "./todolist-service.mjs"

const service = new TodolistService();

const server = http.createServer((request, response) => {
    response.setHeader("content-type","application/json");
    response.setHeader("accept","application/json");

    if(request.method === "GET") {
        service.getTodoList(request, response);
    } else if (request.method === "POST") {
        service.createTodo(request, response);
    } else if (request.method === "PUT") {
        service.updateTodo(request, response);
    } else if (request.method === "DELETE") {
        service.deleteTodo(request, response)
    }
})
 
const PORT = 3000
server.listen(PORT)

console.log(`Server running at port ${PORT}`)