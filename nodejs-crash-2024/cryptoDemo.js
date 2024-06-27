
import crypto from "crypto";

//  //createHash()
// const hash = crypto.hash("sha256", "password1234");
// console.log(hash)

// const hash2 = crypto.createHash("sha256");
// hash2.update("password1234");
// console.log(hash2.digest("hex"));

// //randomgBytes()
// crypto.randomBytes(16, (err, buff) => {
//     if (err) throw err;
//     console.log(buff.toString("hex"));
// })

//createCipheriv & createDecpiheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encryptedText = cipher.update("Hello, this is a secret message: :3", "utf8", "hex");
encryptedText += cipher.final("hex");
console.log(encryptedText);


const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decryptedText = decipher.update(encryptedText, "hex", "utf8");
decryptedText += decipher.final("utf8");
console.log(decryptedText);