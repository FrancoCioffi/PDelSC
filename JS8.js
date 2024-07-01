class CZooAnimal {
    constructor(name, cageNumber, IdTypeAnimal, weight) {
        this.IdAnimal = Math.random()
        this.name = name;
        this.cageNumber = cageNumber;
        this.IdTypeAnimal = IdTypeAnimal;
        this.weight = weight;
    }
}

const zooAnimals = [
    new CZooAnimal("Tigre", 1, "Felino", 200),
    new CZooAnimal("Carpincho", 2, "Roedor", 50),
    new CZooAnimal("Mono", 3, "Primate", 30),
    new CZooAnimal("Leon", 4, "Felino", 110),
    new CZooAnimal("Iguana", 5, "Reptil", 2)
];

function menor3kg() {
    return zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
}

function felinos() {
    return zooAnimals.filter(animal => animal.IdTypeAnimal === "Felino" && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
}

function jaula4() {
    const animal = zooAnimals.find(animal => animal.cageNumber === 4 && animal.weight < 120);
    return animal ? animal.name : "Animal no encontrado";
}

console.log("Cantidad de animales en la jaula 5 que pesan menos de 3kg:", menor3kg());
console.log("Cantidad de animales felinos entre las jaulas 2 y 5:", felinos());
console.log("Nombre del animal en la jaula 4 que pesa menos de 120kg:", jaula4());