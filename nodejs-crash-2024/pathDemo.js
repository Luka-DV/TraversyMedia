import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

//basename()
// returns the last portion of a path: test.txt
console.log(path.basename(filePath));

//dirname()
// returns just the file path to the file: ./dir1/dir2
console.log(path.dirname(filePath));

//extname()
// returns the extension name: .txt
console.log(path.extname(filePath));

//parse()
// returns an object with the data above
console.log(path.parse(filePath));


//current file and directory path:
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

//join() creates a file path based on the arguments passed in
// reason: different os-es us different delimiters - /, \ etc.
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

//resolve() - same as join, but with an absolute path
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test2.txt");
console.log(filePath3);

