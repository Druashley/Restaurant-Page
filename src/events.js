import { homeLink, contactLink, menuLink, recipeLink } from "./links.js";
import { contactText } from "./contactpage.js";
import { homeText } from "./homepage.js"
import { menuText } from "./menupage.js"
import { recipeText } from "./recipepage.js"
 




const Links = {
    home: () => { homeLink.addEventListener('click', homeText) },
    contact: () => { contactLink.addEventListener('click', contactText) },
    menu: () => { menuLink.addEventListener('click', menuText) },
    recipe: () => {recipeLink.addEventListener('click', recipeText )}
}


export { Links }