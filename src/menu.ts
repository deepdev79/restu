import mmenu from "/mmenu.jpg";
import smenu from "/smenu.jpg";
import tnc from "/tnc.jpg";

let h1 = document.createElement("h1") as HTMLHeadingElement;

const menuDiv = document.createElement("div") as HTMLDivElement;

let div = document.createElement("div") as HTMLDivElement;
let ul = document.createElement("ul") as HTMLUListElement;

const mainDishes: { dish: string; price: number }[] = [
  { dish: "Pancake", price: 3.99 },
  { dish: "Omlette and Bacon", price: 4.5 },
  { dish: "Boiled eggs and Bacon", price: 3.5 },
  { dish: "Toast and 2 eggs", price: 4.75 },
  { dish: "Toast and Sasuage", price: 3.25 },
  { dish: "Custom", price: 7.99 },
];

const sides: { dish: string; price: number }[] = [
  { dish: "bacon or sausage", price: 1.25 },
  { dish: "cold cereal", price: 1.5 },
  { dish: "hot oatmeal", price: 2.5 },
  { dish: "Fries/wedges", price: 3.5 },
];

const drinks: { dish: string; price: number }[] = [
  { dish: "Coffee or Tea", price: 2 },
  { dish: "Fresh Juice", price: 3.5 },
  { dish: "Soda", price: 2.5 },
  { dish: "Sparkling water", price: 1.5 },
];

menuDiv.classList.add("menu-section");
div.classList.add("menu-box");
h1.textContent = "Breakfast Menu";

//Main menu
mainDishes.forEach((item) => {
  const li = document.createElement("li") as HTMLLIElement;
  li.textContent = `${item.dish}.......$${item.price}`;
  ul.appendChild(li);
});

div.classList.add("menu-box");
div.appendChild(ul);
menuDiv.appendChild(div);

// Image 1
div = document.createElement("div") as HTMLDivElement;
let img = document.createElement("img") as HTMLImageElement;
div.classList.add("menu-box");
img.src = mmenu;
img.alt = "Main menu";
div.appendChild(img);
menuDiv.appendChild(div);

//Image 2
div = document.createElement("div") as HTMLDivElement;
img = document.createElement("img") as HTMLImageElement;
div.classList.add("menu-box");
img.src = smenu;
img.alt = "Sides menu";
div.appendChild(img);
menuDiv.appendChild(div);

//Sides
div = document.createElement("div") as HTMLDivElement;
ul = document.createElement("ul") as HTMLUListElement;
sides.forEach((item) => {
  const li = document.createElement("li") as HTMLLIElement;
  li.textContent = `${item.dish}.......$${item.price}`;
  ul.appendChild(li);
});

div.classList.add("menu-box");
div.appendChild(ul);
menuDiv.appendChild(div);

//Drinks

div = document.createElement("div") as HTMLDivElement;
ul = document.createElement("ul") as HTMLUListElement;
drinks.forEach((item) => {
  const li = document.createElement("li") as HTMLLIElement;
  li.textContent = `${item.dish}.......$${item.price}`;
  ul.appendChild(li);
});
div.classList.add("menu-box");
div.appendChild(ul);
menuDiv.appendChild(div);

//Image 3
div = document.createElement("div") as HTMLDivElement;
img = document.createElement("img") as HTMLImageElement;
div.classList.add("menu-box");
img.src = tnc;
img.alt = "Tea and Coffee";
div.appendChild(img);
menuDiv.appendChild(div);

export { menuDiv };
