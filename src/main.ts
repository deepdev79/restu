import "./style.css";

const buttons = document.querySelectorAll<HTMLButtonElement>(".btn");

import { mainDiv } from "./home";
import { menuDiv } from "./menu";
import { contactDiv } from "./contact";

const content = document.getElementById("content");
content?.appendChild(menuDiv);

function handleClick(event: MouseEvent): void {
  const option = (event.target as HTMLButtonElement).textContent;
  while (content?.firstChild) {
    content.removeChild(content.firstChild);
  }
  if (option === "Home") content?.appendChild(mainDiv);
  else if (option === "Menu") content?.appendChild(menuDiv);
  else content?.appendChild(contactDiv);
}

buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", handleClick);
});
