const Footer = () => {
  let el = document.createElement("footer");
  el.classList.add("footer");
  el.innerHTML = `<span>&copy 2022 by tydevelops</span>`;
  return el;
};
export default Footer;

// const createEl = kind => {
//   let el = document.createElement(kind);
//   el.classList.add(kind);
//   return el;
// }
