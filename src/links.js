import { content, runPage } from "./loadpage.js";

const navBar = document.createElement('div');
const homeLink = document.createElement("div");
const contactLink = document.createElement('div');
const menuLink = document.createElement('div');
const recipeLink = document.createElement('div');


navBar.style.background = "#fff2cc"
navBar.style.padding = "2px"
navBar.style.display = 'flex'
navBar.style.justifyContent = "space-around"
navBar.style.fontSize = "20px";
navBar.style.textShadow = "1px 1px 1px #ff9933, 2px 2px 2px #ffd24d";
navBar.style.borderBottom = "black solid 3px";


homeLink.textContent = "Home";
homeLink.style.textDecoration = 'underline';
homeLink.style.padding = '10px'
homeLink.classList.add("btn");


homeLink.addEventListener('mouseover', function () {
    homeLink.style.background = '#e5d9b7';
    homeLink.style.border = 'black 1px solid';
    homeLink.style.borderRadius = '15px'
});

homeLink.addEventListener('mouseout', function () {
    homeLink.style.background = '#fff2cc'
    homeLink.style.border = '1px solid transparent'
});





contactLink.textContent = 'Contact'
contactLink.style.textDecoration = 'underline';
contactLink.style.padding = '10px'
contactLink.classList.add("btn");
contactLink.style.border = '1px solid transparent';



contactLink.addEventListener('mouseover', function () {
    contactLink.style.background = '#e5d9b7'
    contactLink.style.border = 'black 1px solid'
    contactLink.style.borderRadius = '15px'
});

contactLink.addEventListener('mouseout', function () {
    contactLink.style.background = '#fff2cc'
    contactLink.style.border = '1px solid transparent'
});




menuLink.textContent = 'Menu';
menuLink.style.textDecoration = 'underline';
menuLink.style.padding = '10px'
menuLink.classList.add("btn");



menuLink.addEventListener('mouseover', function () {
    menuLink.style.background = '#e5d9b7'
    menuLink.style.border = 'black 1px solid'
    menuLink.style.borderRadius = '15px'
});

menuLink.addEventListener('mouseout', function () {
    menuLink.style.background = '#fff2cc'
    menuLink.style.border = '1px solid transparent'
});



recipeLink.textContent = "Recipe Showcase";
recipeLink.style.textDecoration = 'underline';
recipeLink.style.padding = '10px'
recipeLink.classList.add("btn");

recipeLink.addEventListener('mouseover', function () {
    recipeLink.style.background = '#e5d9b7';
    recipeLink.style.border = 'black 1px solid';
    recipeLink.style.borderRadius = '15px'
});

recipeLink.addEventListener('mouseout', function () {
    recipeLink.style.background = '#fff2cc'
    recipeLink.style.border = '1px solid transparent'
});






navBar.appendChild(homeLink)
navBar.appendChild(contactLink)
navBar.appendChild(menuLink)
navBar.appendChild(recipeLink)



const attachNavBar = () => { content.appendChild(navBar) }

export { attachNavBar, homeLink, contactLink, menuLink, recipeLink }