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
    this.obtenerDatosAPI(url);
  }

  /**
   * Función para hacer Get a la API, obtener una respuesta
   * y los datos, se usa la funcionalidad fetch API interfaz propia 
   * del lenguaje JS para trabajar con el estándar HTTPRequest
   * => Recibe como parámetro la url que se va a consumir o consultar
   * @param url 
   */
  obtenerDatosAPI (url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        /**
         * Una vez obtenidos los datos llamar el metodo que se encargará 
         * de mostrar la información en cards dentro del contenedor principal 
         */
        this.pintarCards(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  /**
   * Metodo para pintar la información en el contenedor principal
   */
  pintarCards(datos){
    
  }
}
