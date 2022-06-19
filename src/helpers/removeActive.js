const removeActive = () => {
  document.querySelectorAll("div[data-render]").forEach((el) => {
    el.classList.remove("active");
  });
};
export default removeActive;
