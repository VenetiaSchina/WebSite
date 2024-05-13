// script.js

// Open the modal with the clicked image
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close the modal when clicking the close button
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Function to toggle the size of the clicked image
function toggleImageSize(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

const slideshowImages = [
    'photos/Imagine-Dragons-Eyes-Closed1.png',
    'photos/vaporwave-imagine-dragons-grid-hd-wallpaper-preview.jpg',
    'photos/maxresdefault.jpg',
    'photos/header.jpeg'
    // Add more image URLs as needed
];

const slideshowImage = document.querySelector('.slideshow img');
let currentIndex = 0;

function showNextImage() {
    const nextIndex = (currentIndex + 1) % slideshowImages.length;
    const nextImage = new Image();
    nextImage.src = slideshowImages[nextIndex];
    nextImage.onload = () => {
        slideshowImage.classList.add('fade-out'); // Add fade-out class
        setTimeout(() => {
            slideshowImage.src = slideshowImages[nextIndex];
            slideshowImage.classList.remove('fade-out'); // Remove fade-out class
            currentIndex = nextIndex;
        }, 500); // Change image after 500 milliseconds (adjust as needed)
    };
}

// Show the first image immediately
slideshowImage.src = slideshowImages[currentIndex];
setInterval(showNextImage, 5000); // Change image every 5 seconds (5000 milliseconds)

