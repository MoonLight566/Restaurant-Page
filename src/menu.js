function menu() {
  const div = document.querySelector("div#content");
  const div1 = document.createElement("div");
  div1.id = "menu";
  const Starter = document.createElement("div");
  const starH1 = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  starH1.innerHTML = "Starters";
  p1.innerHTML = "Tomato Soup $2.50";
  p2.innerHTML = "Chicken Salad $3.50";
  p3.innerHTML = "Bread and Butter $1.00";

  const middle = document.createElement("div");
  const starH2 = document.createElement("h1");
  const p11 = document.createElement("p");
  const p22 = document.createElement("p");
  const p33 = document.createElement("p");
  const p44 = document.createElement("p");
  const p55 = document.createElement("p");

  starH2.innerHTML = "Main Courses";
  p11.innerHTML = "Grilled Fish and Potatoes $8.50";
  p22.innerHTML = "Italian Pizza $5.50";
  p33.innerHTML = "Veggie Pasta $4.00";
  p44.innerHTML = "Chicken and Potatoes $6.50";
  p55.innerHTML = "Deluxe Burger $5.00";

  const end = document.createElement("div");
  const starH3 = document.createElement("h1");
  const p111 = document.createElement("p");
  const p222 = document.createElement("p");
  const p333 = document.createElement("p");
  const p444 = document.createElement("p");

  starH3.innerHTML = "Desserts";
  p111.innerHTML = "Fruit Salad $2.50";
  p222.innerHTML = "Ice cream $2.00";
  p333.innerHTML = "Chocolate Cake $4.00";
  p444.innerHTML = "Cheese $5.50";

  Starter.appendChild(starH1);
  Starter.appendChild(p1);
  Starter.appendChild(p2);
  Starter.appendChild(p3);

  middle.appendChild(starH2);
  middle.appendChild(p11);
  middle.appendChild(p22);
  middle.appendChild(p33);
  middle.appendChild(p44);
  middle.appendChild(p55);

  end.appendChild(starH3);
  end.appendChild(p111);
  end.appendChild(p222);
  end.appendChild(p333);
  end.appendChild(p444);

  div1.appendChild(Starter);
  div1.appendChild(middle);
  div1.appendChild(end);
  div.innerHTML = "";
  div.appendChild(div1);
}
export default menu;
