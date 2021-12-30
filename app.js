const h2 = document.createElement("h2");
h2.textContent = "An software engineer";

const image = document.getElementById("myPicture");
image.addEventListener('mouseover', function() {
    image.src = 'images/batman.png';
})

image.addEventListener('mouseout', function() {
    image.src = 'images/Santa-Enkhbat.png';
})

document.querySelector("body").appendChild(h2);