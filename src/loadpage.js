// code will go here
import { attachBanner } from "./banner.js";
import { attachBody } from "./body.js";
import { attachFooter } from "./footer.js";
import { attachNavBar } from "./links.js"
import { Links } from "./events.js"

const content = document.getElementById("content");
content.style.fontFamily = 'Sans-serif'




const runPage = () => {
    attachBanner();
    attachNavBar();
    attachBody();
    attachFooter();
    Links.home();
    Links.contact();
    Links.menu();
    Links.recipe();
}


export { runPage, content }