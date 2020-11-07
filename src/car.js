import People from "./people.js";

export default class Car {
    constructor(name, km, people) { 
        //cria no runtime
        this.name = name;
        this.km = km;
        this.people = people;
        this.createdDummyPeople = new People('Oi');
    }
    
    enterInCar(){

    }

    turnOnEngine(){

    }

    start(){
        console.log(`starting engine ${this.name}, ${this.km}, ${this.people.name}`)
        console.log("this.people.putSeatBelt() - ", this.people.putSeatBelt(), this.people.name)
        console.log("this.createdDummyPeople.putSeatBelt() - ", this.createdDummyPeople.putSeatBelt(), this.createdDummyPeople.name)
        console.log(" this.people.outfit.dressOut() - ", this.people.outfit.dressOut())
    }
};

  