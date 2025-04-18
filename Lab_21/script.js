class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    describe() {
        return `${this.name} є ${this.species}.`;
    }
}

const lion = new Animal("Leo", "лев");
const elephant = new Animal("Dumbo", "слон");
const parrot = new Animal("Polly", "папуга");

console.log(lion.describe());
console.log(elephant.describe());
console.log(parrot.describe());