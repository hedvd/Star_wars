import { Component } from '@angular/core';
import { DatosAPIService } from './controllerServices/datos-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Starwars';
  /**
   * Método constructor
   * => Recibe como parámetro el servicio DatosAPIService
   * con el fin de usar sus funcionalidades
   * @param apiStarwars 
   */
  constructor(private apiStarwars: DatosAPIService) { 
    /**
     * Cargar un método de inicio para que no sea vea vacía cuando cargue por primera vez
     */
    window.addEventListener('load', this.apiStarwars.pintarInicio);
  }
  
  /**
   * Método para obtener el id del botón presionado en el aside.
   * => Recibe como parámetro un event para saber en donde se disparo el event
   *    y así obtener el Id de los botones
   * @param e 
   */
  botonPresionado (e) {
    let item;

    /**
     * Los botones están compuestos por tags <a> y <span>
     * Con este condicional obtendremos el id sin importar
     * cual de las dos etiquetas presionemos.
     */
    if(e.target.nodeName === "SPAN") {
      item = e.target.id;
    } else {
      item = e.target.children[0].id;
    }

    /**
     * Llamar función obtenerDatosCompletosXItem del servicio DatosAPIService
     * => Recibe como parámetro el item con el id obtenido
     */
    this.apiStarwars.construirUrl(item);
  }

}
