import { users } from "./data.js";


// Logger middleware
// Will log the url and mehtod whenever a request is made

const logger = (req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
};

// JSON Middleware

const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
};


// Route handler for GET /api/users
// not middleware, just a handler function 

function getUsersHandler(req, res) {
    res.write(JSON.stringify(users));
    res.end();
};

//Route handler for GET /api/users/:id

function getUserByIdHandler(req, res) {
    const userId = req.url.split("/")[3];
    const user = users.find(user => user.id === parseInt(userId));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: "User not found"}));
    }
    res.end();
}

// Route not found handler

const routeNotFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: "Route not found"}));
    res.end();
}


//Handler func for creating a new user

const createUserHandler = (req, res) => {
    let body = "";
    //Listen for data
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}


export {
    logger, 
    jsonMiddleware, 
    getUsersHandler, 
    getUserByIdHandler, 
    routeNotFoundHandler,
    createUserHandler
};
