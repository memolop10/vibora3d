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
        this.cuadros[0].className = "snake";
        this.cuadros[1].className = "snake tapa";
        this.cuadros[2].className = "snake atras";
        this.cuadros[3].className = "snake alante";
    }

    mover(x,y){

        this.x =x;
        this.y = y;

        for (var i = 0; i < this.cuadros.length; i++) {
            this.cuadros[i].style.left = this.x + "px" ;
            this.cuadros[i].style.top = this.y + "px";
            
        }
    }

    agregarElemento(){
        for (var i = 0; i < this.cuadros.length; i++) {
            areaJ.appendChild(this.cuadros[i])
            
        }
    }
}

// class Comida{
//     constructor(){
//         this.cuadros = new Array();
//         this.construirCuerpo();
//         this.asignarClases();
//         this.colocar();
//         this.agregarElemento();
//     }
//     construirCuerpo(){

//         for(var i = 0; i < 4;i++){
//             this.cuadros[i] = document.createElement("div");
//         }

//     }

//     asignarClases(){
//         this.cuadros[0].className = "snake comida";
//         this.cuadros[1].className = "snake tapa comida";
//         this.cuadros[2].className = "snake atras comida";
//         this.cuadros[3].className = "snake alante comida";

//     }

//     posAl(){
//         return (Math.round(Math.random()*9))*40;
//     }

//     colocar(){
//         this.x = this.posAl();
//         this.y = this.posAl();


//         for (var i = 0; i < this.cuadros.length; i++) {
//             this.cuadros[i].style.left = this.x + "px" ;
//             this.cuadros[i].style.top = this.y + "px";
            
//         }
//     }

//     agregarElemento(){
//         for (var i = 0; i < this.cuadros.length; i++) {
//             areaJ.appendChild(this.cuadros[i])
            
//         } 
//     }
// }

//Objetos y variables del juego
var snake = new Cabeza(0,0);
var xdir = 0;
var ydir = 0;
var ejex = true;
var ejey = true;
//motor de juego

document.addEventListener("keydown",function(){
    var cod = event.keyCode;
    if(ejex){
        if(cod == 38){
            xdir = 0;
            ydir = -esp;
            ejex = false;
            ejey = true;

        }
        if(cod == 40){
            xdir = 0;
            ydir = esp;
            ejex = false;
            ejey = true;

        }
    }

    if(ejey){
        //37 tecla izquierda
        if(cod == 37){
            xdir = -esp;
            ydir = 0;
            ejex = true;
            ejey = false;
        }
        //39 tecla derecha
        if(cod == 39){
            xdir = esp;
            ydir = 0;
            ejex = true;
            ejey = false;
        }
    }
})
function mover(){
   var nx = snake.x + xdir;
   var ny = snake.y + ydir; 
    snake.mover(nx , ny)

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

setInterval("bucle()", 400)