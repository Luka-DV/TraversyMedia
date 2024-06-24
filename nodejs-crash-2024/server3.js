// "the beginning of a rest API"

import {createServer} from "http"; //we are using just the method so we can import it direcly
const PORT = process.env.PORT;

import {
    logger, 
    jsonMiddleware, 
    getUsersHandler, 
    getUserByIdHandler, 
    routeNotFoundHandler,
    createUserHandler
} from "./middleware.js";


const server = createServer( (req, res) => {
    logger(req, res, () => {
        jsonMiddleware( req, res, () => {
            if(req.url === "/api/users" && req.method === "GET") {
                getUsersHandler(req, res);
            } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
                getUserByIdHandler(req, res);
            } else if(req.url === "/api/users" && req.method === "POST") {
                createUserHandler(req, res);
            } else {
                routeNotFoundHandler(req, res);
            } 
        });
    });
 
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
