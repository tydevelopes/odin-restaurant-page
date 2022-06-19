import header from "../components/header";
import footer from "../components/footer";
import home from "../components/home";
import nav from "../components/nav";
import render from "./render";
import main from "../components/main";

const init = () => {
  // let mainContent = (main().innerHTML = home());
  document.getElementById("app").append(header(), nav(), main(), footer());
  document.querySelector(".main").append(home());

  // elements
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".nav");
  const closeMenu = document.querySelector(".close-menu");
  const socialIcons = document.querySelector(".social-icons");

  // events
  menuIcon.addEventListener("click", () => {
    menu.classList.add("show");
    socialIcons.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
    socialIcons.classList.remove("show");
    document.body.style.overflow = "";
  });

  menu.addEventListener("click", (e) => {
    if (!e.target.dataset.render) {
      return;
    }
    render(e);
    menu.classList.remove("show");
    socialIcons.classList.remove("show");
    document.body.style.overflow = "";
  });
};

export default init;
