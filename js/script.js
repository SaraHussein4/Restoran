document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });

 

  

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector("#carouselExampleControls");
  let prevBtn = document.querySelector(".sec2 .prev");
  let nextBtn = document.querySelector(".sec2 .next");
  let num1 = document.querySelector(".sec2 .num1");
  let num2 = document.querySelector(".sec2 .num2");

  let bsCarousel = new bootstrap.Carousel(carousel);

  function updateActiveNumber() {
      let activeIndex = carousel.querySelector(".carousel-item.active").nextElementSibling ? 1 : 0;
      
      if (activeIndex === 0) {
          num1.classList.add("active");
          num2.classList.remove("active");
      } else {
          num1.classList.remove("active");
          num2.classList.add("active");
      }
  }

  prevBtn.addEventListener("click", function () {
      bsCarousel.prev();
  });

  nextBtn.addEventListener("click", function () {
      bsCarousel.next();
  });

  carousel.addEventListener("slid.bs.carousel", updateActiveNumber);

  updateActiveNumber();
});



window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 400 && window.innerWidth >= 992) {
    navbar.classList.add("fixed-nav");
    
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
