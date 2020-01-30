import { content } from "./loadpage.js";

const banner = document.createElement('h1');

const bannerText = document.createTextNode('Keto Joes');

banner.appendChild(bannerText);

banner.style.background = " url('./pictures/food.jpeg') repeat center center";
banner.style.textAlign = "center";
banner.style.fontSize = "65px";
banner.style.textShadow = "1px 1px 1px #ff9933, 2px 2px 2px #ffd24d";
banner.style.borderBottom = "black solid 3px";
//banner.style.position = "relative";
//banner.style.top = '0px'
//banner.style.width = '100%'

const attachBanner = () => { content.appendChild(banner) }

export { attachBanner }