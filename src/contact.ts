const employees: {
  name: string;
  designation: string;
  phone: string;
  email: string;
}[] = [
  {
    name: "Mama Bear",
    designation: "chef",
    phone: "555-555-555",
    email: "totallyRealEmail@notFake.com",
  },
  {
    name: "Papa Bear",
    designation: "Manager",
    phone: "555-455-9655",
    email: "maybeRealEmail@notFake.com",
  },
  {
    name: "Baby Bear",
    designation: "Waiter",
    phone: "555-537-235",
    email: "notrealluRealEmail@notFake.com",
  },
];

const h1 = document.createElement("h1") as HTMLHeadingElement;
const contactDiv = document.createElement("div") as HTMLDivElement;
h1.textContent = "Contact us";
contactDiv.appendChild(h1);

const divC = document.createElement("div") as HTMLDivElement;
divC.classList.add("cboxes");
employees.forEach((emp) => {
  const div = document.createElement("div") as HTMLDivElement;
  const h3 = document.createElement("h3") as HTMLHeadElement;
  const ul = document.createElement("ul") as HTMLUListElement;
  const li1 = document.createElement("li") as HTMLLIElement;
  const li2 = document.createElement("li") as HTMLLIElement;
  const li3 = document.createElement("li") as HTMLLIElement;
  div.classList.add("cbox");
  h3.textContent = `${emp.name}`;
  div.appendChild(h3);
  li1.textContent = emp.designation;
  li2.textContent = emp.phone;
  li3.textContent = emp.email;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  div.appendChild(ul);
  divC.appendChild(div);
});
contactDiv.appendChild(divC);

export { contactDiv };
