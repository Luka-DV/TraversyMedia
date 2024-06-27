
// import fs from "fs";
import fs from "fs/promises";

// readFile() - callback

//file location, encoding, callback; is async > the callback func will run once the file is read

// fs.readFile( "./test.txt", "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data)
// });


// readFileSync() - Synchronous version, can be used for small files etc.

// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);


/* Using the fs/promises import */

// readFile() - Promise .then() 

// fs.readFile("./test.txt", "utf8")
//     .then( data => console.log(data))
//     .catch( error => console.error(error));


//readFile() - async/await

const readFile = async () => {
    try {
        const data = await fs.readFile("./test.txt", "utf8");
        console.log(data);
    } catch(err) {
        console.error(err);
    }
};

// writeFile()

const writeFile = async () => {
    try {
        await fs.writeFile("./test.txt", "Hello, I am writting to this file");
        console.log("File written to...")
    } catch (error) {
        console.error(error);
    }
};

//appendFile()

const appendFile = async () => {
    try {
        await fs.appendFile("./test.txt", "\nThis is appended text");
        console.log("File appended to...")
    } catch (error) {
        console.log(error)
    }
}


const main = async () => {
    await writeFile();
    await appendFile();
    await readFile();
};

//main();

// extra ssignment
// an appendFile function for adding functionlity to the logger middleware
const appendFileLog = async (loggedText) => {
    try {
        await fs.appendFile("./test.txt", `\n${loggedText}`);
        console.log("File appended to...")
    } catch (error) {
        console.log(error)
    }
}

export { appendFileLog };