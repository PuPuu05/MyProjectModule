function upDate(previewPic) {
    // Log to check if the event is triggering
    console.log("Mouseover event triggered!");

    // Log the previewPic's src and alt to check values
    console.log("Image Source: " + previewPic.src);
    console.log("Image Alt Text: " + previewPic.alt);

    // Change the text of the div with id 'image'
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt; // Use the alt text of the image for the text

    // Change the background image of the div with id 'image'
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')"; // Set background image to the src of the previewPic

    // Optional: Add any additional styling (e.g., remove previous background color, if any)
    imageDiv.style.backgroundSize = "cover"; // Make sure the background image covers the div
}

function undo() {
    // Log to check if the event is triggering
    console.log("Mouseout event triggered!");

    // Reset the text of the div with id 'image' back to original
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = "Hover over an image below to display here.";

    // Reset the background image of the div with id 'image'
    imageDiv.style.backgroundImage = ""; // Set the background image to empty (removes it)
}
