// Pause animation when hovering over the gallery
document.querySelector('.gallery').addEventListener('mouseenter', () => {
    document.querySelector('.gallery').style.animationPlayState = 'paused';
});

// Resume animation when mouse leaves the gallery
document.querySelector('.gallery').addEventListener('mouseleave', () => {
    document.querySelector('.gallery').style.animationPlayState = 'running';
});

// Function to handle right-click on an image
function openImage(event) {
    event.preventDefault(); // Prevent default right-click behavior (context menu)
    if (event.type === 'contextmenu') {
        alert("You right-clicked the image!");
    } else {
        // Handle what happens when an image is clicked
        // Open the image in a new window
        window.open(event.target.src, '_blank');
    }
}

// Add event listeners to each image
document.querySelectorAll('.gallery img').forEach(item => {
    // Open image when clicked
    item.addEventListener('click', openImage);

    // Pause animation when hovering over an image
    item.addEventListener('mouseenter', () => {
        document.querySelector('.gallery').style.animationPlayState = 'paused';
    });

    // Resume animation when mouse leaves an image
    item.addEventListener('mouseleave', () => {
        document.querySelector('.gallery').style.animationPlayState = 'running';
    });
});









