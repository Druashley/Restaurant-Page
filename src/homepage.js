import { bodyText, body } from "./body.js"
import { contactBody } from "./contactpage.js"
import { menuBody } from "./menupage.js"

function removeOther () {
    while (body.childElementCount > 1) {
        body.removeChild(body.lastChild)
    }
}
const homeText = () => {  bodyText.textContent = "At Keto Joes we guarantee 100% keto-ness in our products. We know that all of your instagram followers watch what you eat. So all of our products are keto to meet your keto needs. Lets eat a healthy lifestyle together in this keto-world. Don't let the keto get to you, we would hate to see you go keto-crazy. Just eat our keto-fries."; removeOther();  }

export { homeText,removeOther }