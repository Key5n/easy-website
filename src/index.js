import { onClick } from "./logic/toggleImage";
import { getDocsExample, display } from "./logic/dataFetch";

const switchButton = document.getElementById("switch-button");
if (!switchButton) {
  throw new Error("switch-button element not found");
}
switchButton.addEventListener("click", onClick);

getDocsExample("c0de")
  .then((result) => {
    display(result);
  })
  .catch((error) => {
    throw new Error(error);
  });

console.log(process.env.apiKey);
