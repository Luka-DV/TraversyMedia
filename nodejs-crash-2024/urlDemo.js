
import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

//URL Object
//creates an URL object
const urlObj = new URL(urlString);

console.log(urlObj);


//format()
// format the url obj back to a string

console.log(url.format(urlObj));

//import.meta.url - not part of the url module but gives some useful data
console.log(import.meta.url)

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(import.meta.filename === url.fileURLToPath(import.meta.url)) // >true, interesting!

console.log(urlObj.search)

const params = new URLSearchParams(urlObj.search);
console.log(params.get("q"));
params.append("limit", "5"); //also has the .set() method ie params.set("overt", "2")
params.delete("limit");
console.log(params); //params is a Map object
