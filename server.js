 // Get all radio buttons
 const stars = document.querySelectorAll('input[name="rating"]');

 // Add event listener to each radio button
 stars.forEach(star => {
     star.addEventListener('click', function() {
         // Get the selected rating
         const rating = this.value;

         // Show success notification
         const successNotification = document.getElementById('successNotification');
         successNotification.textContent = `You rated this product ${rating} stars. Thank you!`;
         successNotification.style.display = 'block';

         // Hide the notification after 3 seconds
         setTimeout(() => {
             successNotification.style.display = 'none';
         }, 3000);
     });
 });