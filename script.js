//space between header between sections
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header"); // Adjust selector if needed
  const headerHeight = header.offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    });
  });
});

//active links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list li a");
  const sections = Array.from(navLinks).map((link) =>
    document.querySelector(link.getAttribute("href"))
  );

  function changeActiveLink() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight >= scrollPosition
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink(); // Run on initial load to set the correct active link
});

//projects left and right arrow
document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const wrapper = document.getElementById("projects-wrapper");

  leftArrow.addEventListener("click", function () {
    wrapper.scrollBy({ left: -300, behavior: "smooth" }); // Adjust the scroll distance as needed
  });

  rightArrow.addEventListener("click", function () {
    wrapper.scrollBy({ left: 300, behavior: "smooth" }); // Adjust the scroll distance as needed
  });
});


//gmail massage received
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    document.getElementById("date").value = new Date().toLocaleString();
    // Send the form data to the server using email.js

    emailjs.sendForm("service_pwhqi1i", "template_b14546x", this).then(
      function (response) {
        alert("Message sent successfully!");
        // Optionally, you can reset the form here
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
  });



  //dark mode 
  // Function to toggle theme
  // document.getElementById('dark-mode-checkbox').addEventListener('change', function () {
  //   if (this.checked) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   } else {
  //     document.documentElement.removeAttribute('data-theme');
  //   }
  // });
  

  const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});




// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down 100px from the top of the page
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
