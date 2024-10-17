const container=document.querySelector(".container")
const contactusBtn=document.querySelector(".navigation a:nth-child(3)")
const homeBtn=document.querySelector(".navigation a:nth-child(3)")
contactusBtn.addEventListener("click",() => {
    container.classList.add("change");
});
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

// Function to move the carousel to the next slide
function moveToNextSlide() {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarouselPosition();
}

// Function to move the carousel to the previous slide
function moveToPrevSlide() {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    updateCarouselPosition();
}

// Function to update the carousel position
function updateCarouselPosition() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Event listeners for carousel controls
nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

// Check if the current page is home
if (window.location.pathname !== '/billbee.html') {
    // If not on home page, hide the carousel
    const carouselContainer = document.getElementById('carousel-container');
    if (carouselContainer) {
        carouselContainer.style.display = 'none';
    }
}

function showConfirmation() {
    document.getElementById("confirmationModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
}
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for manual validation

    // Get form field values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const restaurantName = document.getElementById("restaurantName").value.trim();
    const email = document.getElementById("email").value.trim();

    // Email regular expression pattern
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    // Validate each field
    if (!firstName) {
        alert("Please enter your first name.");
        return false;
    }
    if (!lastName) {
        alert("Please enter your last name.");
        return false;
    }
    if (!restaurantName) {
        alert("Please enter your restaurant name.");
        return false;
    }
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If all validations pass, show the confirmation modal
    showConfirmation();
    return true;
}

function showConfirmation() {
    document.getElementById("confirmationModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
}

