import { apiKey } from "./util.js";

console.log(apiKey);

const hobbies = ["Sport", "Cooking", "Reading"];
const index = hobbies.findIndex((item) => {
   return item === "Sport"
})

console.log(index)


