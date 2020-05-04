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
         * Una vez obtenidos los datos llamar el metodo que se encargará 
         * de mostrar la información en cards dentro del contenedor principal 
         */
        this.pintarCards(data, item);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  /**
   * Metodo para pintar la información en el contenedor principal
   */
  pintarCards(datos, item){
    const contenedor = document.getElementById('contenedorCards');
    let templateHTML = ""

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
    document.querySelector('#contenedorCards').innerHTML = templateHTML;
    console.log(datos, contenedor);
  }

}
