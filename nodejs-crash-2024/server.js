import http from "http"; //included in Node
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT; //PORT var is stored in .env file


// Get current path:
// __filename > gives current file name with the path
// __dirname > will give you the path of the file (folder)
// so dostopne same po sebi samo v commonJS
// you can make yout own using the url and path modules (included in node):

const __filename = url.fileURLToPath(import.meta.url) //takes the file url and turns it into a path
const __dirname = path.dirname(__filename); //gives the path do the file (you are in)

console.log(`Filename: ${__filename}`);
console.log(import.meta.url)
console.log(`Directory: ${__dirname}`);

const server = http.createServer( async (request, response) => {

    //simple router:
    try {
        if(request.method === "GET") { //check if GET request
            let filePath;
            if(request.url === "/") {
                filePath = path.join(__dirname, "public", "index.html"); //cretes a path to the file
            } else if (request.url === "/about") {
                filePath = path.join(__dirname, "public", "about.html");
            } else {
                throw new Error("Not Found"); //not found page would be better
            }

            const data = await fs.readFile(filePath);
            response.setHeader("Content-Type", "text/html");
            response.write(data);
            response.end();
        } else {
            throw new Error("Request method not alowed")
        }
    } catch(error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.end(`Server error`);
        console.error(error);
    }


    // try {
    //     if(request.method === "GET") { //check if GET request
    //         if(request.url === "/") {
    //             response.writeHead(200, {"Content-Type": "text/html"});
    //             response.end("<h1>Homepage</h1>"); 
    //         } else if (request.url === "/about") {
    //             response.writeHead(200, {"Content-Type": "text/html"});
    //             response.end("<h2>About page</h2>");
    //         } else {
    //             response.writeHead(404, {"Content-Type": "text/html"});
    //             response.end("<h1>Page not found</h1>");
    //         }
    //     } else {
    //         throw new Error("Request method not alowed")
    //     }
    // } catch(error) {
    //     response.writeHead(500, {"Content-Type": "text/plain"});
    //     response.end(`Server error`);
    //     console.error(error);
    // }


    // response.write("Hello World!");

    // response.setHeader("Content-Type", "text/html");
    // response.statusCode = 404;
    // can be combined into:
    // response.writeHead(200, {"Content-Type": "text/html"});

    // response.end("<h1>Hello Bor!</h1>"); 
    //>ends the stream, is handled by default in frameworks like express

    // response.end(JSON.stringify({message: "Server ErroR"})) //response is sending some json
    //important properties:
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request) //shitload of stuff
});

// In Express, you can do sth like this:
// app.post("/users", () => {some code}) 
// the callback code will run if you made a post request to /users

//we have to listen for a port:
server.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});

