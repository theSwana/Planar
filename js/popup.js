// Get the modal, button, and close elements
const infoModal = document.getElementById("infoModal");
const infoLink = document.querySelector("a[href='Info.html']");
const closeModalBtn = document.querySelector(".modal .close");

// Function to show the modal with smooth transition
function showInfoModal() {
    infoModal.classList.add("show"); // Add the show class to make modal visible
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

// Function to hide the modal with smooth transition
function hideInfoModal() {
    infoModal.classList.remove("show"); // Remove the show class to hide modal
    document.body.style.overflow = "auto"; // Enable background scrolling
}

// Event listener to open the modal when clicking on the Info link
infoLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action (navigation)
    showInfoModal(); // Show the Info modal
});

// When the user clicks on <span> (x), close the modal
closeModalBtn.addEventListener("click", function() {
    hideInfoModal(); // Hide the modal
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == infoModal) {
        hideInfoModal(); // Hide the modal
    }
});




