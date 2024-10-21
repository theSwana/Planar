// Smoothly reveal the footer when it scrolls into view
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");

    const revealFooter = () => {
        const footerPosition = footer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (footerPosition < screenPosition) {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        }
    };

    window.addEventListener("scroll", revealFooter);
    revealFooter(); // Trigger on load in case footer is already in view
});
