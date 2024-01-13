window.onload = () => {
    let obtenerParametro = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParametro(document.URL);
    console.log(param);

    fetch(`../assets/data/data.json`)
    .then(res => res.json())
    .then(data => {
        let proyecto = data[param];
        console.log(proyecto);
        let estructuraDetalles = document.querySelector(".mainDetalles");

        if (!proyecto) {
            estructuraDetalles.remove();
            return;
        }

        let palabrasClaveHTML = proyecto.palabras_clave?.split(',').map(palabra => `#${palabra.trim().toLowerCase()}`).join(' ');

        let categoriaClase = proyecto.categoria ? `categoriaPresente` : '';

        estructuraDetalles.innerHTML = `
            <div class="imagenes ${categoriaClase}">
                <div class="imgProyectoPortada">
                    <img src="${proyecto.imagenes?.split(', ')[0]}" alt="${proyecto.titulo}">
                    <div class="descripcionImg">
                        <p>${proyecto.desc_img1}</p>
                    </div>
                </div>
                <div class="imagenesProyectos">
                    ${proyecto.imagenes?.split(', ').slice(1).map((imagen, index) => `
                        <div class="imgProyectoIndividual">
                            <img src="${imagen}" alt="${proyecto.titulo}-imagen-${index + 2}">
                            <div class="descripcionImg">
                                ${proyecto['desc_img' + (index + 2)] ? `<p>${proyecto['desc_img' + (index + 2)]}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div> 
            </div>
            <div class="infoBox">
                <div class="nombreProyecto">
                    <h3 class="tituloProyecto">${proyecto.titulo}</h3>
                    ${proyecto.subtitulo ? `<h4 class="subtituloProyecto">${proyecto.subtitulo}</h4>` : ''}
                </div>
                <div class="textoDatos">
                    <div class="datosProyecto">
                        <div class="datosAlumnProf">
                            ${proyecto.nombre_estudiante ? `<h3 class="nombreAlumno">${proyecto.nombre_estudiante}</h3>` : ''}
                            ${proyecto.especialidad ? `<p class="especialidad">Especialidad: ${proyecto.especialidad}</p>` : ''}
                            ${proyecto.asignatura ? `<p class="asignatura">Asignatura: ${proyecto.asignatura}</p>` : ''}
                            ${proyecto.curso ? `<p class="curso">Curso: ${proyecto.curso}</p>` : ''}
                            <div class="contacto">
                                ${proyecto.correo_estudiante ? `<p class="correo">${proyecto.correo_estudiante}</p>` : ''}
                                ${proyecto.redes_estudiante ? `<a href="${proyecto.redes_estudiante}"><p class="rrss"></p></a>` : ''}
                            </div>
                        </div>
                        <div class="descripcionProyecto">
                            ${proyecto.descripcion ? `<p>${proyecto.descripcion}</p>` : ''}
                            <div class="otrosDatos">
                                ${proyecto.nombre_docente ? `<p class="nombreProf">Docente/s: ${proyecto.nombre_docente}</p>` : ''}
                                ${proyecto.entidad ? `<p class="entidad">${proyecto.entidad}</p>` : ''}
                                ${proyecto.categoria ? `<p class="categoria">${proyecto.categoria}</p>` : ''}
                                ${proyecto.linea_investigacion ? `<p class="lineaInvestigacion">${proyecto.linea_investigacion}</p>` : ''}
                                ${palabrasClaveHTML ? `<p class="palabrasClave">${palabrasClaveHTML}</p>` : ''}
                            </div>
                            <div class="descargas">
                                ${proyecto.doc_info ? `<div class="info"><a href="${proyecto.doc_info}"><p>+info</p></a></div>` : ''}
                                ${proyecto.form2 ? `<div class="formulario"><a href="${proyecto.form2}"><p>Formulario</p></a></div>` : ''}
                                ${proyecto.enlace_video ? `<div class="video"><a href="${proyecto.enlace_video}"><p>Vídeo</p></a></div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    })
    .catch(error => console.error('Error:', error));
};
