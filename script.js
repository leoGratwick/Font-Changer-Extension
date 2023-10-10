


console.log("main Script running")

chrome.runtime.onMessage.addListener(gotMessage);

const originalFont = document.body.style.fontFamily;
console.log(originalFont);

const originalColour = document.body.style.color;
console.log(originalColour);


// Reapplies saved font/colour from local storage after refreshed
const savedFont = localStorage.getItem("selectedFont");
const savedColour = localStorage.getItem("selectedColour");

if (savedFont) {
  if (savedFont !== "Original"){
  changeFontForElement(document.documentElement, savedFont);
}
}
if (savedColour) {
  if (savedColour !== "Original"){
  changeColourForElement(document.documentElement, savedColour);
  }
}


function changeFontForElement(element, font) {
    element.style.fontFamily = font;
    const childElements = element.querySelectorAll('*');
    childElements.forEach((child) => {
      child.style.fontFamily = font;
    });
  }

function changeColourForElement(element, colour) {
  element.style.color = colour;
  const childElements = element.querySelectorAll('*');
  childElements.forEach((child) => {
    child.style.color = colour;
  });
}


function gotMessage (message, sender, senderResponse){
    console.log("recieved a message");
        const type = message.type

        //for fonts
        if (type == "font"){

        let selectedFont = message.content
        // save font in local storage
        localStorage.setItem("selectedFont", selectedFont);

        // Apply the Font
        if (selectedFont == "Original"){
            changeFontForElement(document.documentElement, originalFont);
        }
        else{changeFontForElement(document.documentElement, selectedFont);}

        console.log("Font attempteed to apply: " + selectedFont);
        console.log("Font applied: " + document.documentElement.style.fontFamily);

        }

        //for colours

        else if (type == "colour"){
          let selectedColour = message.content
        // save colour in local storage
        localStorage.setItem("selectedColour", selectedColour);

        // Apply the Colour
        if (message == "Original"){
            changeColourForElement(document.documentElement, originalColour);
        }
        else{changeColourForElement(document.documentElement, selectedColour);}

        console.log("Colour attempteed to apply: " + selectedFont);
        console.log("Colour applied: " + document.documentElement.style.color);
        }
        


        
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