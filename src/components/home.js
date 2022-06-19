const Home = () => {
  let el = document.createElement("template");
  el.innerHTML = `<div class="home sec-1">
    <div class="sub-title">
      <span>VEGETARIAN CUISINE</span>
      <span>DELIVERED TO YOUR DOORSTEP</span>
    </div>
  </div>
  <div class="sec-2">
    <div class="sec-2-title">OUR RESTAURANT</div>
    <div class="sec-2-sub-title">Local fresh cuisine for everyone</div>
    <div class="statement">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      non maxime nobis quam quae sint cum sapiente animi. Nesciunt
      incidunt aut placeat nemo eos officiis, obcaecati aliquam ex! Rem
      tenetur explicabo at officiis ullam reiciendis ab voluptas similique
      obcaecati numquam?
    </div>
  </div>
  <div class="home sec-1">
    <div class="sub-title">
      <span>VEGETARIAN CUISINE</span>
      <span>DELIVERED TO YOUR DOORSTEP</span>
    </div>
  </div>
  <div class="sec-2">
    <div class="sec-2-title">OUR RESTAURANT</div>
    <div class="sec-2-sub-title">Local fresh cuisine for everyone</div>
    <div class="statement">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      non maxime nobis quam quae sint cum sapiente animi. Nesciunt
      incidunt aut placeat nemo eos officiis, obcaecati aliquam ex! Rem
      tenetur explicabo at officiis ullam reiciendis ab voluptas similique
      obcaecati numquam?
    </div>
  </div>`;
  return el.content;
};
export default Home;
