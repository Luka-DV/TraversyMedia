import http from "http"; //included in Node
const PORT = 8000;

const server = http.createServer( (request, response) => {
    // response.write("Hello World!");
    response.end("Hello Europe!"); //ends the stream, is handled by default in frameworks like express
});

//we have to listen for a port:
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
