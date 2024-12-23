const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Link clicked:"); // Debug log
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});
