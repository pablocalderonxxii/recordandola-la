import { Component, Injectable } from '@angular/core';
// Importamos la libreria de firebase database
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	// Definimos las variables con su tipo de dato
	mensaje : string = '';
	listado : any = [];
  recuerdos : any;

  // Agregamos a nuestro codigo la libreria importada
	constructor(public afDB: AngularFireDatabase
 	){

     /*afDB.object("recuerdos").valueChanges().subscribe(
       (val) => {
         console.log("resultados", val);
       }
     )*/

  }



  // Creamos una funcion que enviara los datos a firebase
	guardar() {
  		
	}
  asustar(){
    let nombre=prompt("como te llamas");
    alert("Hola "+nombre);
  }

}
