const Header = () => {
  let el = document.createElement("header");
  el.classList.add("header");
  el.innerHTML = `<div class="address">
    <span class="street">123 chandler st</span>
    <span class="location">worcester, MA 01602</span>
  </div>
  <div class="title">Thyme</div>
  <div class="social-icons">
    <span class="material-symbols-outlined"> favorite</span>
    <span class="material-symbols-outlined">settings</span>
  </div>
  <div class="menu-icon">
    <span class="material-symbols-outlined">menu</span>
  </div>`;

  return el;
};
export default Header;
