export default function contact() {
  const content = document.querySelector("div#content");
  const about = document.createElement("div");
  const owner = document.createElement("h1");
  const name = document.createElement("p");
  const Phone = document.createElement("p");
  const email = document.createElement("p");
  const add = document.createElement("p");

  about.id = "about";
  owner.textContent = "Owner";
  name.textContent = "NAME: Devi mike";
  Phone.textContent = "Phone: 555-555-555";
  email.textContent = "EMAIL: notTrue@gmail.com";
  add.textContent = "ADDRESS: Dubai hamza street";

  about.appendChild(owner);
  about.appendChild(name);
  about.appendChild(Phone);
  about.appendChild(email);
  about.appendChild(add);
  content.innerHTML = "";
  content.appendChild(about);
}
