//js1

// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;
// const indicators = document.querySelector(".indicators");

// // Initialize indicators
// for (let i = 0; i < totalSlides; i++) {
//     const indicator = document.createElement("div");
//     indicator.classList.add("indicator");
//     if (i === currentSlide) indicator.classList.add("active");
//     indicators.appendChild(indicator);
// }

// // Update the active indicator based on the current slide
// function updateIndicators() {
//     document.querySelectorAll(".indicator").forEach((indicator, index) => {
//         indicator.classList.toggle("active", index === currentSlide);
//     });
// }

// // Show slide and update indicators
// function showSlide(index) {
//     const slider = document.querySelector(".testimonial-slider");
//     slider.style.transform = `translateX(-${index * 100}%)`;
//     updateIndicators();
// }

// // Next slide function
// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     showSlide(currentSlide);
// }

// // Previous slide function
// function prevSlide() {
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     showSlide(currentSlide);
// }

// // Auto-slide every 5 seconds
// setInterval(nextSlide, 5000);

//js2

// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;
// const indicators = document.querySelector(".indicators");

// // Initialize indicators and set active for first slide
// for (let i = 0; i < totalSlides; i++) {
//     const indicator = document.createElement("div");
//     indicator.classList.add("indicator");
//     if (i === currentSlide) indicator.classList.add("active");
//     indicator.addEventListener("click", () => goToSlide(i));
//     indicators.appendChild(indicator);
// }

// // Update active indicator
// function updateIndicators() {
//     document.querySelectorAll(".indicator").forEach((indicator, index) => {
//         indicator.classList.toggle("active", index === currentSlide);
//     });
// }

// // Show the slide based on index
// function showSlide(index) {
//     const slider = document.querySelector(".testimonial-slider");
//     slider.style.transform = `translateX(-${index * 100}%)`;
//     updateIndicators();
// }

// // Go to specific slide
// function goToSlide(index) {
//     currentSlide = index;
//     showSlide(currentSlide);
// }

// // Auto-slide every 5 seconds
// setInterval(() => {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     showSlide(currentSlide);
// }, 5000);

//js3

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const indicators = document.querySelector(".indicators");

// Initialize indicators and set active for the first slide
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (i === currentSlide) indicator.classList.add("active");
    indicator.addEventListener("click", () => goToSlide(i));
    indicators.appendChild(indicator);
}

// Update active indicator
function updateIndicators() {
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
    });
}

// Show the active slide and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    updateIndicators();
}

// Go to a specific slide
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);
