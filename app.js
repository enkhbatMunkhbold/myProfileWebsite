const image = document.getElementById("myPicture");
image.addEventListener('mouseover', function() {
    image.src = 'images/Santa-Enkhbat.png';
})

image.addEventListener('mouseout', function() {
    image.src = 'images/batman.png';
})

