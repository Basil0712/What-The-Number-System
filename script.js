/*
If you are looking for a way to resize the div's font-size to fit the entire text without word break or scroll, you should use JavaScript to detect if the text is overflowing and adjust font-size accordly:

function fitText(outputSelector){
    // max font size in pixels
    const maxFontSize = 50;
    // get the DOM output element by its selector
    let outputDiv = document.getElementById(outputSelector);
    // get element's width
    let width = outputDiv.clientWidth;
    // get content's width
    let contentWidth = outputDiv.scrollWidth;
    // get fontSize
    let fontSize = parseInt(window.getComputedStyle(outputDiv, null).getPropertyValue('font-size'),10);
    // if content's width is bigger then elements width - overflow
    if (contentWidth > width){
        fontSize = Math.ceil(fontSize * width/contentWidth,10);
        fontSize =  fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize - 1;
        outputDiv.style.fontSize = fontSize+'px';   
    }else{
        // content is smaller then width... let's resize in 1 px until it fits 
        while (contentWidth === width && fontSize < maxFontSize){
            fontSize = Math.ceil(fontSize) + 1;
            fontSize = fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize;
            outputDiv.style.fontSize = fontSize+'px';   
            // update widths
            width = outputDiv.clientWidth;
            contentWidth = outputDiv.scrollWidth;
            if (contentWidth > width){
                outputDiv.style.fontSize = fontSize-1+'px'; 
            }
        }
    }
}
*/
