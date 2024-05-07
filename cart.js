// JavaScript for handling cart functionality

// Get the modal element
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var cartLink = document.querySelector(".cart-link");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// When the user clicks on the cart link, open the modal
cartLink.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
