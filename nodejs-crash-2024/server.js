import http from "http"; //included in Node
const PORT = 8000;

const server = http.createServer( (request, response) => {
    // response.write("Hello World!");

    // response.setHeader("Content-Type", "text/html");
    // response.statusCode = 404;
    // can be combined into:

    response.writeHead(500, {"Content-Type": "application/json"});

    //response.end("<h1>Hello Europe!</h1>"); //ends the stream, is handled by default in frameworks like express
    response.end(JSON.stringify({message: "Server ErroR"})) //response is sending some json
});

//we have to listen for a port:
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

