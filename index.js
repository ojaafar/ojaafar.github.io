/* ==========================================
   PORTAFOLI OUSAMA JAAFAR
========================================== */


/* ==========================================
   1. FILTRES DELS PROJECTES
========================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        // Traiem l'estat actiu de tots els botons

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Activem el botó seleccionat

        button.classList.add("active");


        // Obtenim el filtre

        const filter = button.dataset.filter;


        // Revisem tots els projectes

        projects.forEach(project => {

            const category = project.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                project.classList.remove("hide");

            }

            else {

                project.classList.add("hide");

            }

        });

    });

});




/* ==========================================
   2. MENU HAMBURGUESA
========================================== */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

const navItems = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    const menuIsOpen =
        navLinks.classList.contains("active");


    // Canviem ☰ per ×

    menuToggle.textContent =
        menuIsOpen ? "×" : "☰";


    // Accessibilitat

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );


    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Tancar menú"
            : "Obrir menú"
    );

});




/* ==========================================
   3. TANCAR MENU QUAN CLIQUEM UN ENLLAÇ
========================================== */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Obrir menú"
        );

    });

});




/* ==========================================
   4. ANIMACIONS AL FER SCROLL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );


                    // Només fem l'animació una vegada

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});




/* ==========================================
   5. SECCIO ACTIVA DEL MENU
========================================== */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveSection() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove(
            "active-link"
        );


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveSection
);


updateActiveSection();




/* ==========================================
   6. BOTÓ TORNAR A DALT
========================================== */

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    }

    else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




/* ==========================================
   7. TANCAR MENU SI ES REDIMENSIONA
   LA FINESTRA A ESCRIPTORI
========================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
