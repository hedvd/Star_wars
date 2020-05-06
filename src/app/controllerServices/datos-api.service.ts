import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosAPIService {

  constructor() { }
  /**
   * Método para construir la url del recurso que se va a consumir
   * luego llama al método del servicio obtenerDatosAPI()
   * => Recibe como parámetro el id del botón 
   * @param item 
   */
  construirUrl (item) {
    console.log(item);
    let url = `https://swapi.py4e.com/api/${item}/`;
    /**
     * Llamar método obtenerDatosAPI() propio del servicio
     * => Recibe como parámetro la url construida
     */
    this.obtenerDatosAPI(url, item);
  }


  /**
   * Función para hacer Get a la API, obtener una respuesta
   * y los datos, se usa la funcionalidad fetch API interfaz propia 
   * del lenguaje JS para trabajar con el estándar HTTPRequest
   * => Recibe como parámetro la url que se va a consumir o consultar
   * @param url 
   */
  obtenerDatosAPI (url, item) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        /**
         * Una vez obtenidos los datos llamar el método que se encargará 
         * de mostrar la información en cards dentro del contenedor principal 
         * por medio de un swicth sabrá que información mostrar.
         */
        switch (item) {
          case 'people': {
            this.pintarPersonajes(data);
            break;
          }
          case 'films': {
            this.pintarPeliculas(data);
            break;
          }
          case 'starships': {
            this.pintarNavesEspaciales(data);
            break;
          }
           
          case 'vehicles':{
            this.pintarVehiculos(data);
            break;
          }
            
          case 'planets': {
            this.pintarPlanetas(data);
            break;
          }
          case 'species': {
            this.pintarEspecies(data);
            break;
          }

          default: {
            alert('La opción seleccionada no contiene información que mostrar!!');
            break;
          }
        } 
      })
      .catch((error) => {
        console.log(error);
      })
  }


  /**
  * Método de inicio para que no sea vea vacía cuando cargue por primera vez
  * la página en el navegador
  */
  pintarInicio() {
    const contenedor = document.getElementById('contenedorCards');
    let inicio = `
        <img src="assets/pictures/fondoStars.jpg" class="w-100 h-100" style="background-size: cover;">
    `;

    contenedor.style.background = "#00000031";
    contenedor.style.padding = ".8rem";
    contenedor.style.borderRadius = ".5rem";
    document.querySelector('#contenedorCards').innerHTML = inicio;
    console.log(document.querySelector('#contenedorCards'));
  }


  /**
   * Metodo para pintar la información de Personajes en el contenedor principal
   *  => Recibe los datos del endpoint people de la API Starwars
   * @param datos 
   */
  pintarPersonajes(datos){
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = "";
    let titulo = `
      <div class="w-100 d-flex justify-content-center align-items-center font-weight-bold mb-4" style="font-size: 2.5rem; text-shadow: #649d66 1px 2px 3px;"> Personajes </div>
    `;

    for (let i = 0; i < datos.results.length; i++) {
      
      // Insertar template que se va a mostrar
      templateHTML += `
        <div class="card mb-4" style="width: 15rem;">
          <div class="card-body">
            <h5 class="card-title border-bottom pb-1">${datos.results[i].name}</h5>
            <p class="card-text">
              <span>Género : ${datos.results[i].gender}.</span><br />
              <span>Altura : ${datos.results[i].height} cm.</span><br />
              <span>Peso : ${datos.results[i].mass} kg.</span><br />
              <span>Color de ojos : ${datos.results[i].eye_color}.</span><br />
              <span>Color de cabello : ${datos.results[i].hair_color}.</span>
            </p>
          </div>
        </div>
      `;
    }

    contenedor.style.background = "#dbdbdb";
    contenedor.style.padding = ".8rem";
    contenedor.style.borderRadius = ".8rem";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = titulo + templateHTML;
  }


  /**
   * Metodo para pintar la información de Películas en el contenedor principal
   *  => Recibe los datos del endpoint people de la API Starwars
   * @param datos 
   */
  pintarPeliculas(datos){
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = "";
    let titulo = `
      <div class="w-100 d-flex justify-content-center align-items-center font-weight-bold mb-4" style="font-size: 2.5rem; text-shadow: #649d66 1px 2px 3px;"> Películas </div>
    `;

    for (let i = 0; i < datos.results.length; i++) {
      
      // Insertar template que se va a mostrar
      templateHTML += `
        <div class="card mb-4" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title border-bottom pb-1">${datos.results[i].title}</h5>
            <p class="card-text">
              <span class="font-weight-bolder">Fecha de lanzamiento : </span> ${datos.results[i].release_date}.<br />
              <span class="font-weight-bolder">Director : </span> ${datos.results[i].director}.<br />
              <span class="font-weight-bolder">Productores : </span> ${datos.results[i].producer}.<br />
              <span class="font-weight-bolder">Episodio : </span> ${datos.results[i].episode_id}.<br />
              <span class="font-weight-bolder">Resumen : </span> ${datos.results[i].opening_crawl}.
            </p>
          </div>
        </div>
      `;
    }

    contenedor.style.background = "#dbdbdb";
    contenedor.style.padding = ".8rem";
    contenedor.style.borderRadius = ".8rem";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = titulo + templateHTML;
  }

  /**
   * Metodo para pintar la información de Naves Espaciales en el contenedor principal
   *  => Recibe los datos del endpoint people de la API Starwars
   * @param datos 
   */
  pintarNavesEspaciales(datos){
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = "";
    let titulo = `
      <div class="w-100 d-flex justify-content-center align-items-center font-weight-bold mb-4" style="font-size: 2.5rem; text-shadow: #649d66 1px 2px 3px;"> Naves Espaciales </div>
    `;

    for (let i = 0; i < datos.results.length; i++) {
      
      // Insertar template que se va a mostrar
      templateHTML += `
        <div class="card mb-4" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title border-bottom pb-1">${datos.results[i].name}</h5>
            <p class="card-text">
              <span class="font-weight-bolder">Modelo : </span> ${datos.results[i].model}.<br />
              <span class="font-weight-bolder">Tripulación : </span> ${datos.results[i].crew}.<br />
              <span class="font-weight-bolder">Cant. Pasajeros : </span> ${datos.results[i].passengers}.<br />
              <span class="font-weight-bolder">Velocidad Estelar : </span> ${datos.results[i].MGLT}.<br />
              <span class="font-weight-bolder">Largo : </span> ${datos.results[i].length} m.<br />
              <span class="font-weight-bolder">Capacida de carga : </span> ${datos.results[i].cargo_capacity}<br />
              <span class="font-weight-bolder">Versión hiperimpulsor : </span> ${datos.results[i].hyperdrive_rating}.<br />
              <span class="font-weight-bolder">Fabricante : </span> ${datos.results[i].manufacturer}.<br />
              <span class="font-weight-bolder">Velocidad en Atmosfera : </span> ${datos.results[i].max_atmosphering_speed}.
            </p>
          </div>
        </div>
      `;
    }

    contenedor.style.background = "#dbdbdb";
    contenedor.style.padding = ".8rem";
    contenedor.style.borderRadius = ".8rem";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = titulo + templateHTML;
  }


  /**
   * Metodo para pintar la información de Planetas en el contenedor principal
   *  => Recibe los datos del endpoint people de la API Starwars
   * @param datos 
   */
  pintarPlanetas(datos){
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = "";
    let titulo = `
      <div class="w-100 d-flex justify-content-center align-items-center font-weight-bold mb-4" style="font-size: 2.5rem; text-shadow: #649d66 1px 2px 3px;"> Planetas </div>
    `;

    for (let i = 0; i < datos.results.length; i++) {
      
      // Insertar template que se va a mostrar
      templateHTML += `
        <div class="card mb-4" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title border-bottom pb-1">${datos.results[i].name}</h5>
            <p class="card-text">
              <span class="font-weight-bolder">Población : </span> ${datos.results[i].population}<br />
              <span class="font-weight-bolder">Terreno : </span> ${datos.results[i].terrain}<br />
              <span class="font-weight-bolder">Clima : </span> ${datos.results[i].climate}.<br />
              <span class="font-weight-bolder">Diámetro : </span> ${datos.results[i].diameter}.<br />
              <span class="font-weight-bolder">Gravedad : </span> ${datos.results[i].gravity}.<br />
              <span class="font-weight-bolder">Período orbital : </span> ${datos.results[i].orbital_period}.<br />
              <span class="font-weight-bolder">Período rotación : </span> ${datos.results[i].rotation_period}.<br />
              <span class="font-weight-bolder">Agua en superficie : </span> ${datos.results[i].surface_water}.
            </p>
          </div>
        </div>
      `;
    }

    /**
     * Estilos para el contenedor principal
     */
    contenedor.style.background = "#dbdbdb";
    contenedor.style.padding = ".8rem";
    contenedor.style.borderRadius = ".8rem";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = titulo + templateHTML;
  }
  /**
   * Metodo para pintar la información de los vehiculos en el contenedor principal
   *  => Recibe los datos del endpoint people de la API Starwars
   * @param datos 
   */
  pintarVehiculos(datos){
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = "";
    let titulo = `
      <div class="w-100 d-flex justify-content-center align-items-center font-weight-bold mb-4" style="font-size: 2.5rem; text-shadow: #649d66 1px 2px 3px;"> Vehículos </div>
    `;

    for (let i = 0; i < datos.results.length; i++) {
      
      // Insertar template que se va a mostrar
      templateHTML += `
        <div class="card mb-4" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title border-bottom pb-1">${datos.results[i].name}</h5>
            <p class="card-text">
              <span class="font-weight-bolder">Modelo : </span> ${datos.results[i].model}.<br />
              <span class="font-weight-bolder">Tripulación : </span> ${datos.results[i].crew}.<br />
              <span class="font-weight-bolder">Cant. Pasajeros : </span> ${datos.results[i].passengers} m.<br />
              <span class="font-weight-bolder">Largo : </span> ${datos.results[i].length} m.<br />
              <span class="font-weight-bolder">Capacidad de carga : </span> ${datos.results[i].cargo_capacity}.<br />
              <span class="font-weight-bolder">Fabricante : </span> ${datos.results[i].manufacturer}.<br />
              <span class="font-weight-bolder">Velocidad en Atmosfera : </span> ${datos.results[i].max_atmosphering_speed}.
            </p>
          </div>
        </div>
      `;
    }

    contenedor.style.background = "#dbdbdb";
    contenedor.style.padding = ".8rem";
    contenedor.style.borderRadius = ".8rem";
    document.querySelector('#contenedorCards').innerHTML = titulo + templateHTML;
  }


  /**
   * Metodo para pintar la información de Planetas en el contenedor principal
   *  => Recibe los datos del endpoint people de la API Starwars
   * @param datos 
   */
  pintarEspecies(datos){
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = "";
    let titulo = `
      <div class="w-100 d-flex justify-content-center align-items-center font-weight-bold mb-4" style="font-size: 2.5rem; text-shadow: #649d66 1px 2px 3px;"> Especies </div>
    `;

    for (let i = 0; i < datos.results.length; i++) {
      
      // Insertar template que se va a mostrar
      templateHTML += `
        <div class="card mb-4" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title border-bottom pb-1">${datos.results[i].name}</h5>
            <p class="card-text">
              <span class="font-weight-bolder">Lenguaje : </span> ${datos.results[i].language}.<br />
              <span class="font-weight-bolder">Altura Media : </span> ${datos.results[i].average_height} m.<br />
              <span class="font-weight-bolder">Promedio de vida : </span> ${datos.results[i].average_lifespan}<br />
              <span class="font-weight-bolder">Color Ojos : </span> ${datos.results[i].eye_colors}.<br />
              <span class="font-weight-bolder">Color Cabello : </span> ${datos.results[i].hair_colors}.<br />
              <span class="font-weight-bolder">Color de Piel : </span> ${datos.results[i].skin_colors}.<br />
              <span class="font-weight-bolder">Denominación : </span> ${datos.results[i].designation}.<br />
              <span class="font-weight-bolder">Clasificación : </span> ${datos.results[i].classification}.
            </p>
          </div>
        </div>
      `;
    }

    /**
     * Estilos para el contenedor principal
     */
    contenedor.style.background = "#dbdbdb";
    contenedor.style.padding = ".8rem";
    contenedor.style.borderRadius = ".8rem";
    // Agregar el template literal al contenedor que deseamos mostrar la información
    document.querySelector('#contenedorCards').innerHTML = titulo + templateHTML;
  }

}
