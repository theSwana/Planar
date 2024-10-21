window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('fade-out'); 
    }, 1000); // Delay
});

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".centered-content");

    function handleScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Adjust trigger point as needed

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add("animate-slide-up");
            window.removeEventListener("scroll", handleScroll); // Trigger only once
        }
    }

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const projectSlider = document.querySelector(".project-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const scrollAmount = 400;

    prevBtn.addEventListener("click", () => {
        projectSlider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    nextBtn.addEventListener("click", () => {
        projectSlider.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    
    const smallItems = document.querySelectorAll(".project-item.small-item");

    smallItems.forEach((item) => {
        item.addEventListener("click", () => {
            const itemPosition = item.offsetLeft - projectSlider.offsetLeft;
            const centerPoint = (projectSlider.clientWidth - item.clientWidth) / 2;
            
            projectSlider.scrollTo({
                left: itemPosition - centerPoint,
                behavior: "smooth"
            });
        });
    });
});



