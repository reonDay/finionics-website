document.addEventListener("DOMContentLoaded", function() {
    const typedTexts = document.querySelectorAll('.typed-text');

    typedTexts.forEach((element) => {
        element.addEventListener('animationend', function(event) {
            // Memeriksa apakah animasi 'erase' sudah selesai
            if (event.animationName === 'erase') {
                // Setelah animasi penghapusan selesai, mulailah animasi pengetikan lagi
                element.style.animation = 'none'; // Hentikan animasi yang sedang berjalan
                element.offsetHeight; // Memaksa reflow untuk mereset animasi
                element.style.animation = ''; // Mulai ulang animasi
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Daftar ID bagian
    const sections = ["hero", "services", "about", "project"];
    let currentSectionIndex = 0;

    // Navigasi gulir dengan klik navbar
    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            scrollToSection(targetId);

            // Perbarui indeks bagian saat navigasi melalui klik
            currentSectionIndex = sections.indexOf(targetId.toLowerCase());
        });
    });

    // Navigasi gulir dengan scroll
    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            // Scroll ke bawah
            currentSectionIndex++;
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            // Scroll ke atas
            currentSectionIndex--;
        }
        scrollToSection(sections[currentSectionIndex]);
    });

    // Fungsi untuk scroll dengan animasi
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }
});

const navbar = document.getElementById('navbar');

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // Toggle menu
});


AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    easing: 'ease', // Efek easing animasi
    once: false, // Animasi hanya terjadi sekali
    mirror: true    
  });