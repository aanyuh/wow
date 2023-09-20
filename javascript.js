// JavaScript.js



//nav
document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    console.log("Button clicked");
    if (sideNav.style.right === "" || sideNav.style.right === "-250px") {
        sideNav.style.right = "0px";
        menu.src = "images/close.png";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";
    }
});

});


// slidshow
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }


//services
document.addEventListener("DOMContentLoaded", function () {
    // Get all the service boxes
    const serviceBoxes = document.querySelectorAll(".single-service");

    // Add a class to trigger the animation
    function animateServiceBoxes() {
        serviceBoxes.forEach((box) => {
            box.classList.add("animate");
        });
    }

    // Trigger the animation after a delay (adjust the delay as needed)
    setTimeout(animateServiceBoxes, 500);
});




//signup
document.addEventListener("DOMContentLoaded", function () {
    // Function to validate password match
    function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var passwordError = document.getElementById("password_error");
    if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match";
    passwordError.style.display = "block";
    return false; // Prevent form submission
    } else {
    passwordError.textContent = ""; // Clear any previous error messages
    passwordError.style.display = "none";
    return true; // Allow form submission
    }
    }
    // Function shows the popup
    function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    }
    // Function closes the popup
    function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    }
    // Attach an event listener to the form's submit event
    document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (validateForm()) {
    // Show the success message
    showPopup();
    // Redirect after a delay
    setTimeout(function () {
    window.location.href = "1index.html";
    }, 2000);
    }
    });
    });
    




// log in
    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("loginForm");
        const popup = document.getElementById("popup");

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission behavior

            // Perform your login logic here
            // You can use AJAX or send a request to your server

            // Show the popup
            popup.style.display = "block";

            // Redirect after a delay
            setTimeout(function () {
                window.location.href = "1index.html";
            }, 2000);
        });

        function closePopup() {
            popup.style.display = "none";
        }

        // Function to close the popup when clicking the close button
        document.querySelector(".popup-close").addEventListener("click", closePopup);

        // Function to close the popup when clicking outside the popup
        window.addEventListener("click", function (event) {
            if (event.target === popup) {
                closePopup();
            }
        });
    });



    // app booking

    document.addEventListener("DOMContentLoaded", function () {
        // Sample data for available dates and times
        const availableDates = [
            "2023-09-18",
            "2023-09-19",
            "2023-09-20",
        ];
    
        const availableTimes = [
            "09:00 AM",
            "11:00 AM",
            "02:00 PM",
            "04:00 PM",
        ];
    
        // Function to populate date buttons
        function populateDateButtons() {
            const dateButtonsContainer = document.getElementById("date-buttons");
    
            availableDates.forEach((date) => {
                const button = document.createElement("button");
                button.textContent = new Date(date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                button.classList.add("date-button");
                button.addEventListener("click", () => {
                    // Deselect all date buttons first
                    const dateButtons = dateButtonsContainer.querySelectorAll(".date-button");
                    dateButtons.forEach((btn) => btn.classList.remove("selected"));
    
                    // Select the clicked date button
                    button.classList.add("selected");
    
                    // Store the selected date in a variable
                    const selectedDate = date;
                    document.getElementById("selected-date").textContent = new Date(selectedDate).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
                    // Populate time buttons for the selected date
                    populateTimeButtons(selectedDate);
                });
                dateButtonsContainer.appendChild(button);
            });
        }
    
        // Function to populate time buttons based on the selected date
        function populateTimeButtons(selectedDate) {
            const timeButtonsContainer = document.getElementById("time-buttons");
    
            // Clear existing time buttons
            timeButtonsContainer.innerHTML = "";
    
            availableTimes.forEach((time) => {
                const button = document.createElement("button");
                button.textContent = time;
                button.classList.add("time-button");
                button.addEventListener("click", () => {
                    // Deselect all time buttons first
                    const timeButtons = timeButtonsContainer.querySelectorAll("button");
                    timeButtons.forEach((btn) => btn.classList.remove("selected"));
    
                    // Select the clicked time button
                    button.classList.add("selected");
    
                    // Store the selected time in a variable
                    const selectedTime = time;
                    document.getElementById("selected-time").textContent = selectedTime;
    

                    const servicePrice = calculateServicePrice(); 
                    document.getElementById("receipt-price").textContent = servicePrice;
    
                    // Display the appointment details and receipt sections
                    document.getElementById("appointment-details").style.display = "block";
                    document.getElementById("receipt").style.display = "block";
                });
                timeButtonsContainer.appendChild(button);
            });
        }
    
        // Placeholder function for calculating the service price (replace with your logic)
        function calculateServicePrice() {
            // Replace this with your actual price calculation logic
            // This is a placeholder that returns a random price between 50 and 200
            return (Math.floor(Math.random() * (200 - 50 + 1)) + 50).toFixed(2);
        }
    
        // Initialize the date buttons when the page loads
        populateDateButtons();
    });

    document.addEventListener("DOMContentLoaded", function () {
        const bookButton = document.getElementById("book-button");
        const popup = document.getElementById("popup");
        const popupMessage = document.getElementById("popup-message");

        bookButton.addEventListener("click", function () {
            // Show the popup
            popup.style.display = "block";

            // Set the popup message
            popupMessage.textContent = "Your appointment has been booked successfully. See you there!";

            // Close the popup after a delay (e.g., 3 seconds)
            setTimeout(function () {
                closePopup();
                window.location.href = "1index.html";
            }, 3000);
        });

        function closePopup() {
            popup.style.display = "none";
        }

        // Function to close the popup when clicking outside the popup
        window.addEventListener("click", function (event) {
            if (event.target === popup) {
                closePopup();
            }
        });
    });