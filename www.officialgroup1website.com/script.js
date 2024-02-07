let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
})

// Get references to the buttons in the header
let homeButton = document.getElementById('homeButton');
let listButton = document.getElementById('listButton');
let finalButton = document.getElementById('finalButton');
let referencesButton = document.getElementById('referencesButton');
let analysisButton = document.getElementById('analysisButton');

// Get references to the sections
let homeSection = document.querySelector('.parallax');
let listSection = document.querySelector('.sec1');
let finalSection = document.querySelector('.sec2');
let referencesSection = document.querySelector('.sec3');
let analysisSection = document.querySelector('.sec4');

// Add event listeners to the buttons
homeButton.addEventListener('click', () => {
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

listButton.addEventListener('click', () => {
    listSection.scrollIntoView({ behavior: 'smooth' });
});

finalButton.addEventListener('click', () => {
    finalSection.scrollIntoView({ behavior: 'smooth' });
});

referencesButton.addEventListener('click', () => {
    referencesSection.scrollIntoView({ behavior: 'smooth' });
});

analysisButton.addEventListener('click', () => {
    analysisSection.scrollIntoView({ behavior: 'smooth' });
});

// Prevent scrolling beyond the bottom of the Analysis section
window.addEventListener('scroll', () => {
    let analysisBottom = analysisSection.offsetTop + analysisSection.offsetHeight;
    let windowBottom = window.innerHeight + window.pageYOffset;

    if (windowBottom >= analysisBottom) {
        window.scrollTo(0, analysisBottom - window.innerHeight);
    }
});

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
