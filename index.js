import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

let myUserName = process.env.name;
console.log(myUserName);

console.log("Starting the backend project");
