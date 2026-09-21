// Seleccionamos todos los botones de filtro
const filterButtons = document.querySelectorAll(".filter-btn");

// Seleccionamos todos los proyectos
const projects = document.querySelectorAll(".project-card");


// Recorremos todos los botones
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Quitamos la clase active de todos
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Añadimos active al botón pulsado
        button.classList.add("active");


        // Obtenemos el filtro seleccionado
        const filter = button.dataset.filter;


        // Recorremos todos los proyectos
        projects.forEach(project => {

            // Obtenemos la categoría del proyecto
            const category = project.dataset.category;


            // Si pulsamos "Todos"
            // mostramos todos los proyectos
            if (filter === "all") {

                project.classList.remove("hide");

            }

            // Si coincide la categoría
            else if (category === filter) {

                project.classList.remove("hide");

            }

            // Si no coincide, lo ocultamos
            else {

                project.classList.add("hide");

            }

        });

    });

});
