const toggleBtn = document.getElementById("navbarToggle");
const navLinksSmall = document.getElementById("navLinksSmall");
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

toggleBtn.addEventListener("click", () => {
  navLinksSmall.classList.toggle("show");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
  const sections = document.querySelectorAll("section[id]");

  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, {
    threshold: 0.5, 
  });

  sections.forEach(section => {
    observer.observe(section);
  });


  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; 
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

