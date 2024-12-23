<<<<<<< HEAD
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Link clicked:"); // Debug log
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});
=======
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Link clicked:"); // Debug log
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});
>>>>>>> 4124556493c7797cd7527e688da86523594197d1
