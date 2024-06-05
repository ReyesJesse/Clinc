const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Toggle nav-active class on .nav-links
    navLinks.classList.toggle('nav-active');

    // Toggle burger animation
    burger.classList.toggle('toggle');
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'color 0.3s ease';
            link.style.color = '#0066cc'; // Change color on hover
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = 'black'; // Revert to original color on mouse leave
        });
    });
});

// Array to hold image URLs in WebP format
const imageUrls = [
    "/carouselimage1.webp",
    "/carouselimage2.webp",
    "/carouselimage3.webp",
    "/carouselimage4.webp",
    "/carouselimage5.webp",
    "/carouselimage6.webp"
];

// Preload images
function preloadImages(urls) {
    urls.forEach(function(url) {
        var img = new Image();
        img.src = url;
    });
}

// Call preloadImages function
preloadImages(imageUrls);

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0; // Track the index of the currently displayed image

    // Function to change slide
    function changeSlide() {
        currentIndex = (currentIndex + 1) % thumbnails.length; // Increment index and loop back to 0 when reaching the end
        mainImage.src = thumbnails[currentIndex].src; // Change main image source
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
        thumbnails[currentIndex].classList.add('active'); // Set active class to the current thumbnail
        fadeInMainImage(mainImage); // Start fade-in animation
        resetTimer(); // Reset the timer after each automatic slide change
    }

    // Function to fade in the main image
    function fadeInMainImage(mainImage) {
        var opacity = 0;
        var interval = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.005; // Adjust the increment value for smoother animation
                mainImage.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 0); // Adjust timing for the fade-in effect
    }

    // Add click event listener to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index; // Update currentIndex when a thumbnail is clicked
            mainImage.src = thumbnail.src;
            thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
            thumbnail.classList.add('active');
            fadeInMainImage(mainImage);
            resetTimer(); // Reset the timer when a thumbnail is clicked
        });
    });

    // Auto slide after 5 seconds
    let autoSlideTimer = setTimeout(changeSlide, 5000); // Change slide after 5 seconds

    // Function to reset the auto slide timer
    function resetTimer() {
        clearTimeout(autoSlideTimer);
        autoSlideTimer = setTimeout(changeSlide, 5000); // Reset the timer
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.nav-links li');

    menuItems.forEach(item => {
        const subMenu = item.querySelector('.sub-menu');
        if (subMenu) {
            item.addEventListener('mouseenter', () => {
                subMenu.classList.add('visible');
            });

            item.addEventListener('mouseleave', () => {
                subMenu.classList.remove('visible');
            });
        }
    });
});
