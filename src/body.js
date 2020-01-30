import { content } from "./loadpage.js";

const body = document.createElement("div")

const bodyText = document.createTextNode("div");
const fryDiv = document.createElement('div');
const fryPicture = document.createElement('img');


bodyText.textContent = "At Keto Joes we guarantee 100% keto-ness in our products. We know that all of your instagram followers watch what you eat. So all of our products are keto to meet your keto needs. Lets eat a healthy lifestyle together in this keto-world. Don't let the keto get to you, we would hate to see you go keto-crazy. Just eat our keto-fries";

body.style.margin = "auto"
body.style.width = "450px"
body.style.height = '450px'
//body.style.border = "2px #ffe799 solid"


body.style.position = "relative";
body.style.paddingTop = "50px"







body.appendChild(bodyText);

fryPicture.setAttribute("src", "./pictures/friesTwo.png")
fryPicture.setAttribute("alt", "Our keto fries");

fryDiv.style.position = 'absolute'
fryDiv.style.right = '0px'
fryDiv.style.bottom = '0px'




fryDiv.appendChild(fryPicture)

body.appendChild(fryDiv)




const attachBody = () => { content.appendChild(body) };

export { attachBody, bodyText, body }