


console.log("main Script running")

chrome.runtime.onMessage.addListener(gotMessage);

const originalFont = document.body.style.fontFamily;
console.log(originalFont);


// Reapplies saved font from local storage after refreshed
const savedFont = localStorage.getItem("selectedFont");

if (savedFont) {
  changeFontForElement(document.documentElement, savedFont);
}


function changeFontForElement(element, font) {
    element.style.fontFamily = font;
    const childElements = element.querySelectorAll('*');
    childElements.forEach((child) => {
      child.style.fontFamily = font;
    });
  }


function gotMessage (message, sender, senderResponse){
    console.log("recieved a message");
        const selectedFont = message
        // save font in local storage
        localStorage.setItem("selectedFont", selectedFont);

        // Apply the Font
        if (message == "Original"){
            changeFontForElement(document.documentElement, originalFont);
        }
        else{changeFontForElement(document.documentElement, selectedFont);}


        console.log("Font attempteed to apply: " + selectedFont);
        console.log("Font applied: " + document.documentElement.style.fontFamily);
}






// function changeFont(element){
//     if (element.hasChildNodes()){
//         element.childNodes.forEach(changeFont)
//     }
//     else if(element.nodeType === Text.TEXT_NODE){
//         element.parentElement.style.fontFamily = "Open Sans"
//     }
// }



// changeFont(document.body)