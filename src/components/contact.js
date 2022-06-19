const Contact = () => {
	let el = document.createElement("template");
	el.innerHTML = `<div class="contact sec-1">
  <div class="sub-title">
    <span>CONTACT US</span>
  </div>
</div>
<div class="contacts">
<div class="mapouter">
<div class="gmap_canvas">
  <iframe
    width="100%"
    height="589"
    id="gmap_canvas"
    src="https://maps.google.com/maps?q=123%20chandler%20st&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
  ></iframe
  ><a href="https://2piratebay.org"></a><br /><style>
    .mapouter {
      position: relative;
      text-align: right;
      height: 589px;
      width: 100%;
    }</style
  ><a href="https://www.embedgooglemap.net">get google maps embed code</a
  ><style>
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: auto;
      width: 100%;
    }
  </style>
</div>
</div>
</div>`;
	return el.content;
};
export default Contact;
