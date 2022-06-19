const Nav = () => {
  let el = document.createElement("nav");
  el.classList.add("nav");
  el.innerHTML = `<div class="close-menu">
    <span class="material-symbols-outlined">close</span>
  </div>
  <div data-render='home' class="home active">home</div>
  <div data-render='menu' class="menu">menu</div>
  <div data-render='contact' class="contact">contact</div>`;
  return el;
};
export default Nav;
