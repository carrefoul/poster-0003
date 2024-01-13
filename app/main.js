window.onload = () => {
    let datos;

    let verDetalle = (e) => {
        window.open(`../pages/detalle.html?id=${e.currentTarget.id}`, "_self");  
    };

    fetch(`assets/data/data.json`)
    .then(res => res.json())
    .then(data => {
        datos = data;
        let listaSostenible = document.querySelector(".proyectosCaja.dSostenible");
        let listaPatrimonio = document.querySelector(".proyectosCaja.dPatrimonio");
        let listaInnSocial = document.querySelector(".proyectosCaja.dInnSocial");
        let listaInnovacion = document.querySelector(".proyectosCaja.dInnovacion");
        let listaLudico = document.querySelector(".proyectosCaja.dLudico");
        let listaExperiencias = document.querySelector(".proyectosCaja.dExperiencias");
        let listaOtros = document.querySelector(".proyectosCaja.dOtros");
        data.forEach((proyecto, index) => {
            switch(proyecto.linea_investigacion){
                case "Diseño sostenible y ecodiseño":
                    let itemSostenible = `
                        <div class="proyectoBox" id="${index}">
                            <div class="imgBox">
                                <img src="${proyecto.imagenes.split(', ')[0]}" alt="${proyecto.titulo}">
                            </div>
                            <h3 class="titulo">${proyecto.titulo}</h3>
                            <p class="autor">${proyecto.nombre_estudiante}</p>
                            <div class="descripcion">
                                <p>${proyecto.descripcion}</p>
                            </div>
                        </div>`;
                    listaSostenible.innerHTML += itemSostenible;
                    break;

                case "Diseño y patrimonio":
                    let itemPatrimonio = `
                        <div class="proyectoBox" id="${index}">
                            <div class="imgBox">
                                <img src="${proyecto.imagenes.split(', ')[0]}" alt="${proyecto.titulo}">
                            </div>
                            <h3 class="titulo">${proyecto.titulo}</h3>
                            <p class="autor">${proyecto.nombre_estudiante}</p>
                            <div class="descripcion">
                                <p>${proyecto.descripcion}</p>
                            </div>
                        </div>`;
                    listaPatrimonio.innerHTML += itemPatrimonio;
                    break;

                case "Diseño para la innovación social":
                    let itemInnSocial = `
                        <div class="proyectoBox" id="${index}">
                            <div class="imgBox">
                                <img src="${proyecto.imagenes.split(', ')[0]}" alt="${proyecto.titulo}">
                            </div>
                            <h3 class="titulo">${proyecto.titulo}</h3>
                            <p class="autor">${proyecto.nombre_estudiante}</p>
                            <div class="descripcion">
                                <p>${proyecto.descripcion}</p>
                            </div>
                        </div>`;
                    listaInnSocial.innerHTML += itemInnSocial;
                    break;

                case "Diseño e innovación":
                    let itemInnovacion = `
                        <div class="proyectoBox" id="${index}">
                            <div class="imgBox">
                                <img src="${proyecto.imagenes.split(', ')[0]}" alt="${proyecto.titulo}">
                            </div>
                            <h3 class="titulo">${proyecto.titulo}</h3>
                            <p class="autor">${proyecto.nombre_estudiante}</p>
                            <div class="descripcion">
                                <p>${proyecto.descripcion}</p>
                            </div>
                        </div>`;
                    listaInnovacion.innerHTML += itemInnovacion;
                    break;

                case "Diseño lúdico":
                case "Diseño de juegos y juguetes":
                case "Diseño de juguetes":
                    let itemLudico = `
                        <div class="proyectoBox" id="${index}">
                            <div class="imgBox">
                                <img src="${proyecto.imagenes.split(', ')[0]}" alt="${proyecto.titulo}">
                            </div>
                            <h3 class="titulo">${proyecto.titulo}</h3>
                            <p class="autor">${proyecto.nombre_estudiante}</p>
                            <div class="descripcion">
                                <p>${proyecto.descripcion}</p>
                            </div>
                        </div>`;
                    listaLudico.innerHTML += itemLudico;
                    break;

                case "Diseño de experiencias":
                    let itemExperiencias = `
                        <div class="proyectoBox" id="${index}">
                            <div class="imgBox">
                                <img src="${proyecto.imagenes.split(', ')[0]}" alt="${proyecto.titulo}">
                            </div>
                            <h3 class="titulo">${proyecto.titulo}</h3>
                            <p class="autor">${proyecto.nombre_estudiante}</p>
                            <div class="descripcion">
                                <p>${proyecto.descripcion}</p>
                            </div>
                        </div>`;
                    listaExperiencias.innerHTML += itemExperiencias;
                    break;

                default:
                    let itemOtros = `
                        <div class="proyectoBox" id="${index}">
                            <div class="imgBox">
                                <img src="${proyecto.imagenes.split(', ')[0]}" alt="${proyecto.titulo}">
                            </div>
                            <h3 class="titulo">${proyecto.titulo}</h3>
                            <p class="autor">${proyecto.nombre_estudiante}</p>
                            <div class="descripcion">
                                <p>${proyecto.descripcion}</p>
                            </div>
                        </div>`;
                    listaOtros.innerHTML += itemOtros;
                    break;

            }
            
        });

        let proyectos = document.querySelectorAll(".proyectoBox");
        proyectos.forEach((proyecto) => {
            proyecto.addEventListener("click", verDetalle, true);
        });
    })
    .catch(error => console.error('Error:', error));

    // FUNCIÓN BOTÓN

    let upButton = document.querySelector('.upButton');

    if (upButton) {
        upButton.classList.add('hidden');

        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            var scrollThreshold = 200;

            if (scrollPosition > scrollThreshold) {
                upButton.classList.remove('hidden');
            } else {
                upButton.classList.add('hidden');
            }
        });

        upButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'  // Hace que el desplazamiento sea suave
            });
        });
}


   

};

