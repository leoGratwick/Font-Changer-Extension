console.log("This is the popup script")


document.addEventListener('DOMContentLoaded', function () {
    console.log("Code running");

    const fontSelector = document.getElementById('fontSelector');
    if (fontSelector == null){console.error("Font Selector not found")}
    const applyFontButton = document.getElementById('applyFont');
    if (applyFontButton == null){console.error("Apply Font Button not found")}


    applyFontButton.addEventListener('click', function () {
        const selectedFont = fontSelector.value;

        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, function tabsGotten (tabs){
            console.log(tabs)
        // Message the content script with the selected font
        chrome.tabs.sendMessage(tabs[0].id, selectedFont)
        })

        });
    });


