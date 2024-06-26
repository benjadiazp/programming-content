interface AliveThing {
  move(): void;
  getName(): string;
  weight: number;
}

// class declaration
abstract class Animal implements AliveThing {
  legsQty: number;
  wingsQty: number;
  private vertebrate: boolean;
  weight: number;
  name?: string;

  constructor(
    legsQty: number,
    wingsQty: number,
    vertebrate: boolean,
    weight?: number,
  ) {
    this.legsQty = legsQty;
    this.wingsQty = wingsQty;
    this.vertebrate = vertebrate;
    this.weight = weight ?? 0;
  }

  makeSound() {}
  move() {
    console.log("walking");
  }
  getName(): string {
    return this.name ?? "no tiene nombre";
  }
  getVertebrate(): boolean {
    return this.vertebrate;
  }
}

// inheritance
class Insect extends Animal {
  requiresAQueen: boolean;

  constructor(wingsQty: number, requiresAQueen: boolean) {
    super(6, wingsQty, false);
    this.requiresAQueen = requiresAQueen;
  }
}

class Mammal extends Animal {
  constructor(legsQty: number, hasWings?: boolean) {
    super(legsQty, hasWings ? 2 : 0, true);
  }

  move(material?: string) {
    let verb;
    switch (material) {
      case "water":
        verb = "swimming";
        break;
      case "ground":
        verb = "walking";
        break;
      case "air":
        verb = "flying";
        break;
      default:
        verb = "walking";
    }
    console.log(verb);
  }
}

class Fish extends Animal {
  constructor() {
    super(0, 0, true);
  }

  move() {
    console.log("swimming");
  }
}

// object instantiation
const ant = new Insect(0, true);
const dog = new Mammal(4);
const bat = new Mammal(2, true);
const tuna = new Fish();

ant.move();
tuna.move();
dog.move();
dog.move("water");
dog.name = "lulu";

console.log(ant.legsQty);
console.log(dog.getName());
console.log(ant.getVertebrate());
