document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });

 

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 400 && window.innerWidth >= 992) {
    navbar.classList.add("fixed-nav");
    
  } else {
    navbar.classList.remove("fixed-nav");
  }
});



window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 400 && window.innerWidth >= 992) {
    navbar.classList.add("fixed-nav");
    
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const spinner = document.getElementById("spinner");

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default navigation

          // Show spinner
          spinner.classList.add("show-spinner");

          // Delay the navigation
          setTimeout(() => {
              window.location.href = link.href; // Redirect to the clicked page
          }, 1000); // 1 second delay
      });
  });
});
