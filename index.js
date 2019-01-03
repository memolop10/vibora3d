//variables globales
var areaJ = document.querySelector("#areaJ");
var esp = 40;

//clases
class Cabeza{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.cuadros = new Array();
        this.construirCuerpo();
        this.asignarClases();
        this.mover(this.x , this.y);
        this.agregarElemento();
    } 

    construirCuerpo(){

        for(var i=0; i < 4 ;i++){
            this.cuadros[i] = document.createElement("div");
        }

    }

    asignarClases(){

    }

    mover(x,y){

    }

    agregarElemento(){

    }
}


//motor de juego
function mover(){

}

function colisiones(){

}

function findejuego(){
    alert("Perdiste");
    document.location.reload();
}

function bucle(){
    mover();
    colisiones();
}

setInterval("bucle()", 500)