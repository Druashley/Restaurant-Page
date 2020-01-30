import { content } from "./loadpage.js";
import { body } from "./body.js"


const footer = document.createElement('footer');

const footerText = document.createElement('div');

footerText.textContent = 'Keto Joes!! where everyone goes';

footer.appendChild(footerText);

footer.style.background = " url('./pictures/food.jpeg') repeat center center";
footer.style.textAlign = "center";
footer.style.fontSize = "45px";
footer.style.textShadow = "1px 1px 1px #ff9933, 2px 2px 2px #ffd24d";
footer.style.borderTop = "black solid 3px";
footer.style.position = "absolute";
footer.style.bottom = '0px'
footer.style.width = '100%'

const attachFooter = () => { content.appendChild(footer) }

export { attachFooter }