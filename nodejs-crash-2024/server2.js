// "the beginning of a rest API"

import {createServer} from "http"; //we are using just the method so we can import it direcly
const PORT = process.env.PORT;


const users = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Doe"},
    {id: 3, name: "Jim Doe"}
];

const server = createServer( (req, res) => {
    if(req.url === "/api/users" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    // if we want specific users:
    } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    //in a framework like express this is much simpler
    // we need to get the id from the url:
        const userId = req.url.split("/")[3];
    // then the user:
        const user = users.find(user => user.id === parseInt(userId));
        res.setHeader("Content-Type", "application/json");
        // or just: res.writeHead(404, {"Content-Type": "application/json"});
        if (user) {
            res.write(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({message: "User not found"}));
        }
        res.end(); //you have to include res.end()
    } else {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 404;
        // or just:
        // res.writeHead(404, {"Content-Type": "application/json"});
        res.write(JSON.stringify({message: "Route not found"}));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
