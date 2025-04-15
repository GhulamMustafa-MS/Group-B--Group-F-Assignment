const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const hamburger = document.querySelector(".hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});


// const hamburger = document.querySelector('.hamburger');
// const navbar = document.querySelector('.navbar');

// hamburger.addEventListener('click', () => {
//   navbar.classList.toggle('active');  // Toggle navbar visibility
//   hamburger.classList.toggle('active');  // Toggle hamburger animation
// });

// const hamburger = document.querySelector(".hamburger");
// const navbar = docuument.querySelector(".navbar");

// hamburger.addEventListener("click", ()=>{
//     hamburger.classList.toggle("active");
//     navbar.classList.toggle("active");
// })


//   function toggleMenu() {
//     const navList = document.getElementById("navList");
//     navList.classList.toggle("show");
//   }
