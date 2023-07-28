function RestaurantHomePage() {
  const div = document.querySelector("div#content");
  const div1 = document.createElement("div");
  const H1 = document.createElement("h1");
  const P = document.createElement("p");
  const Img = new Image();

  div1.id = "home";
  H1.innerHTML = "welcome to heaven on earth";
  P.innerHTML =
    "The food is pure understated class with a balanced taste structure, refinement, individuality, and a western touch.";

  div1.appendChild(Img);
  div1.appendChild(H1);
  div1.appendChild(P);
  div.innerHTML = "";
  div.appendChild(div1);
}
export default RestaurantHomePage;
