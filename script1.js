function toggleImageSize(element) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    var img = element.querySelector('.gallery-image');
    
    modalImg.src = img.src;
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

