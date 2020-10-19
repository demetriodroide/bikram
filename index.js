let Coche = {
    marca : "bmw",
    modelo : 5,
    matricula : 4444,
    acelerar: function(){
        console.log("a todo gas")
    }, 
    frenar: function(){
        console.log("cuidado con la abuelita en el paso de cebra")
    },

}

class Turismo {
    constructor(marca, modelo, matricula){
        this.marca = marca; 
        this.modelo = modelo;
        this.matricula = matricula;    
    }
    acelerar(){
        console.log("a todo gas")
    }  
    frenar(){
            console.log("cuidado con la abuelita en el paso de cebra")
        } 
    }

    let miTurismo = new Turismo("Asiento","Leon","1234AAA");

    let miSegundoTurismo = new Turismo("Vuelve","XC90","1540GAB");

class Persona {
    constructor(nombre,apellidos,edad,gustosMusicales){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.gustosMusicales = gustosMusicales;
    }
    envejecer(){
        this.edad++;
    }
    nuevoGusto(gusto){
        this.gustosMusicales.push(gusto);
        // let nuevoGusto = new Persona
    }
}

let rockero = new Persona("Freddie","Mercury",45,["Queen","AC/DC"]);

function aplicar__nuevoGusto(){
rockero.nuevoGusto("My Chemical Romance");}

let Perro = ["nombre","raza",
function popo(){
    return "Ha hecho " +Math.random()*3+ " caquitas"
}]

let Perrito = {
    nombre:"",
    raza:"",
    popo(){
        return "Ha hecho " +Math.random()*3+ " caquitas"
    }
}

class Perrazo {
    constructor(nombre,raza){
        this.nombre = nombre;
        this.raza = raza;
    }
    popo(){
        return "Ha hecho " +Math.random()*3+ " caquitas"
    }
}

lebrelazo = new Perrazo("Gus","Lebrel");

// bien !!! nivel intermedio !!

class Husky extends Perrazo {
constructor (nombre,heterocromia){
super(nombre);
this.heterocromia = heterocromia;
this.raza = "Husky";
}
tieneHeterocromia(){
    if ( this.heterocromia === true)
    console.log("si")
    else { console.log("no")}
}
  
}

let miHusky = new Husky("Alaska",true); 

class Coordenadas {
    constructor (x,y){
    this.x = x;
    this.y = y;
}
}
/*
let miTurismo = new Turismo("Asiento","Leon","1234AAA");

    let miSegundoTurismo = new Turismo("Vuelve","XC90","1540GAB");
*/
class Jugador {
    constructor (fuerza,vida){
        this.posicion = new Coordenadas(); 
        this.fuerza = fuerza;
        this.velocidad = new Coordenadas();
        this.direccion = new Coordenadas();
        this.vida = vida;
    }
    
    moverse(){

    }
    perderVida(){

    }
}

let jugadores = [new Jugador,new Jugador];

let FrameworksJavaScript = {
    frameworks: [],
    generarFramework(){
        
    }
}

/* // objeto dentro de objeto
let david = new Jugador(10,20);
david.posicion.x = 17;
david.posicion.y = -2;
*/

/*
class Mage extends Character {
  
    constructor(name) {
      super(name);
      this.life = 10;
      this.mana = 10;
    }
  
    attack() {
      return 5;
    }
  
    spell() {
      if(this.mana > 0) {
        this.mana--;
        return 55;
      }
      return 0;
    }
  }
*/

    /*
    switch (choice) {
        case 1:
          character = new Barbarian("Conan");
          break;
        case 2:
          character = new Mage("Morgana");
          break;
        default:
          character = new Character("Nobody");
      }
*/
/*
class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  }
  */

  /*
 class Character {

    constructor(name) {
      this.name = name;
      // ....
    }
  
    attack() {
      return 10;
    }
  }
  
  class Barbarian extends Character {
  
    constructor(name) {
      super(name);
      this.life = 50;
    }
  
    attack() {
      return 30;
    }
  }
  
  class Mage extends Character {
  
    constructor(name) {
      super(name);
      this.life = 10;
      this.mana = 10;
    }
  
    attack() {
      return 5;
    }
  
    spell() {
      if(this.mana > 0) {
        this.mana--;
        return 55;
      }
      return 0;
    }
  }
  
  // ... Player chooses character type ...
  let choice = 0;
  // TODO: Captured from DOM, not hardcoded!!!
  
  switch (choice) {
    case 1:
      character = new Barbarian("Conan");
      break;
    case 2:
      character = new Mage("Morgana");
      break;
    default:
      character = new Character("Nobody");
  }
  
  let damage = character.attack(); // ??
*/