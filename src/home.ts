// const content = document.getElementById("content");

//  h1 -> div.box -> p

let h1 = document.createElement("h1") as HTMLHeadingElement;
const mainDiv = document.createElement("div") as HTMLDivElement;
let div = document.createElement("div") as HTMLDivElement;
let p = document.createElement("p") as HTMLParagraphElement;
let span = document.createElement("span") as HTMLSpanElement;

div.classList.add("box");
h1.textContent = "Beary's Breakfast Bar";
div.appendChild(h1);
p.textContent =
  "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

span.classList.add("sp");
span.textContent = "Goldilocks";
p.appendChild(span);
div.appendChild(p);

mainDiv.appendChild(div);

const timings: { day: string; time: string }[] = [
  { day: "Sunday", time: "8am - 8pm" },
  { day: "Monday", time: "6am - 6pm" },
  { day: "Tuesday", time: "6am - 6pm" },
  { day: "Wednesday", time: "6am - 6pm" },
  { day: "Thursday", time: "6am - 10pm" },
  { day: "Friday", time: "6am - 10pm" },
  { day: "Saturday", time: "6am - 10pm" },
];

let h3 = document.createElement("h3") as HTMLHeadingElement;
div = document.createElement("div") as HTMLDivElement;

div.classList.add("box");
h3.textContent = "Hours";
div.appendChild(h3);

const ul = document.createElement("ul") as HTMLUListElement;

timings.forEach((slot) => {
  const li = document.createElement("li") as HTMLLIElement;
  li.textContent = `${slot.day}: ${slot.time}`;
  ul.appendChild(li);
});

div.appendChild(ul);

mainDiv.appendChild(div);

h3 = document.createElement("h3") as HTMLHeadingElement;
div = document.createElement("div") as HTMLDivElement;
p = document.createElement("p") as HTMLParagraphElement;
div.classList.add("box");
h3.textContent = "Location";
div.appendChild(h3);

p.textContent = "123 Forest Drive, Forestville, Maine";
div.appendChild(p);

mainDiv.appendChild(div);

mainDiv.classList.add("mpage");

export { mainDiv };
