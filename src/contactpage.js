import { bodyText, body } from "./body.js"
import { removeOther } from "./homepage.js"

const contactBody = document.createElement('ul');
const contactName = document.createElement('li');
const contactNumber = document.createElement('li');
const contactAddress = document.createElement('li');


contactName.textContent = 'Joe Blow';
contactNumber.textContent = '555-555-5555';
contactAddress.textContent = '12345 EZ ST';

contactBody.appendChild(contactName)
contactBody.appendChild(contactNumber)
contactBody.appendChild(contactAddress)

contactBody.style.fontSize = "26px";
contactBody.style.textShadow = "1px 1px 1px #ff9933, 2px 2px 2px #ffd24d";

//

 const contactText = () => {  bodyText.textContent = ''; removeOther();
 body.appendChild(contactBody); };

 export { contactText, contactBody }