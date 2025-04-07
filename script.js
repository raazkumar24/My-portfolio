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
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




//projects
fetch('./api/projects.json')
  .then((response) => response.json())
  .then((projects) => {
    const projectsWrapper = document.getElementById('projects-wrapper');

    projects.forEach((project) => {
      const projectBox = document.createElement('div');
      projectBox.classList.add('project-box');

      projectBox.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" />
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.liveLink}" target="_blank" class="btn btn-primary">Live Preview</a>
          <a href="${project.githubLink}" target="_blank" class="btn btn-primary"><i class="fa-brands fa-github"></i> Github</a>
        </div>
      `;

      projectsWrapper.appendChild(projectBox);
    });
  })
  .catch((error) => console.error('Error fetching projects:', error));




  
  // Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

// Add hover effects for interactive elements
document.querySelectorAll('a, button, .card, input, textarea').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursorFollower.style.width = '40px';
    cursorFollower.style.height = '40px';
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '8px';
    cursor.style.height = '8px';
    cursorFollower.style.width = '30px';
    cursorFollower.style.height = '30px';
  });
});

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  }
});

// Smooth scroll for anchor links with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Parallax effect for sections
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  document.querySelectorAll('.parallax').forEach(el => {
    const speed = parseFloat(el.getAttribute('data-speed'));
    el.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});