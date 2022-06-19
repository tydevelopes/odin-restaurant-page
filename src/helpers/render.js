import menu from "../components/menu";
import home from "../components/home";
import contact from "../components/contact";
import removeActive from "./removeActive";

const render = (e) => {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  removeActive();
  e.target.classList.add("active");

  switch (e.target.dataset.render) {
    case "home":
      main.append(home());
      break;
    case "menu":
      main.append(menu());
      break;
    case "contact":
      main.append(contact());
      break;
    default:
      return;
  }
};

export default render;
