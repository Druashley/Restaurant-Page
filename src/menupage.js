import { bodyText, body } from "./body.js"
import { removeOther } from "./homepage.js";
import { contactBody } from "./contactpage.js";

const menuBody = document.createElement('div');

const foodList = document.createElement('div');

menuBody.style.width = '400px';
menuBody.style.height = '250px'
menuBody.style.overflow = 'scroll';


function MenuItem(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = '$' + price;
}

const toast = new MenuItem('Toast', 'Lorem ipsum dolor sit amet. ', 2.50);



const toastNode = document.createElement('div');

toastNode.innerHTML = `<fieldset><legend>${toast.name}</legend><p>${toast.description}</p><p>${toast.price}</p></fieldset>`


foodList.appendChild(toastNode);

const frenchFries = new MenuItem('French Fries', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', 3.50);

const frenchFriesNode = document.createElement('div');

frenchFriesNode.innerHTML = `<fieldset><legend>${frenchFries.name}</legend><p>${frenchFries.description}</p><p>${frenchFries.price}</p></fieldset>`

foodList.appendChild(frenchFriesNode);


const burger = new MenuItem('Keto-Burger', 'Cras fermentum odio eu feugiat pretium nibh ipsum consequat.', 7.25);

const burgerNode = document.createElement('div');

burgerNode.innerHTML = `<fieldset><legend>${burger.name}</legend><p>${burger.description}</p><p>${burger.price}</p></fieldset>`;


foodList.appendChild(burgerNode);

menuBody.appendChild(foodList)



const menuText = () => { bodyText.textContent = ""; removeOther(); body.appendChild(menuBody); };

export { menuText, menuBody }