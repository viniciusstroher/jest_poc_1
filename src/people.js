import Outfit from "./outfit.js";

export default class People {
    constructor(name) { 
        //cria no runtime
        this.name = name;
        this.outfit = new Outfit('roupa')
    }

    putSeatBelt(){

    }
};
