import RestaurantHomePage from "./restaurant";
import menu from "./menu";
import contact from "./contact";
import "./style.css";
RestaurantHomePage();

const homeBtn = document.querySelector("#header button:first-child");
const menuBtn = document.querySelector("#header button:nth-child(2)");
const aboutBtn = document.querySelector("#header button:last-child");

homeBtn.addEventListener("click", RestaurantHomePage);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", contact);
