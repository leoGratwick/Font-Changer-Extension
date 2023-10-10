console.log("This is the popup script")


document.addEventListener('DOMContentLoaded', function () {
    console.log("Code running");

    const fontSelector = document.getElementById('fontSelector');
    if (fontSelector == null){console.error("Font Selector not found")}
    const applyFontButton = document.getElementById('applyFont');
    if (applyFontButton == null){console.error("Apply Font Button not found")}

    const colourSelector = document.getElementById('colourSelector');
    if (colourSelector == null){console.error("Colour Selector not found")}
    const applyColourButton = document.getElementById('applyColour');
    if (applyColourButton == null){console.error("Apply Colour Button not found")}


    applyFontButton.addEventListener('click', function () {
        const selectedFont = fontSelector.value;

        let params = {
            active: true,
            currentWindow: true
        }

        chrome.tabs.query(params, function tabsGotten (tabs){
        // Message the content script with the selected font
        let message = {
            type: "font",
            content: selectedFont
        }

        // Message the content script with the selected font
        chrome.tabs.sendMessage(tabs[0].id, message)
        })

        });


        applyColourButton.addEventListener('click', function () {
            const selectedColour = colourSelector.value;
    
            let params = {
                active: true,
                currentWindow: true
            }
            chrome.tabs.query(params, function tabsGotten (tabs){
               

            let message = {
                type: "colour",
                content: selectedColour
            }
            // Message the content script with the selected font
            chrome.tabs.sendMessage(tabs[0].id, message)
            })
    
            });
    });


