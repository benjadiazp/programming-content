import { Mammal } from "./2-class";

class Dog extends Mammal {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const dog = new Dog("Dog", 5);
dog.move(10); // Dog moves 10m

class Bear extends Mammal {
  public color: string;
  private personalName: string;
  constructor(personalName: string, age: number, color: string = "brown") {
    super("Bear", age);
    this.color = color;
    this.personalName = personalName;
  }
  move(distance: number) {
    console.log(`${this.name} walks ${distance}m`);
  }

  swim(distance: number) {
    console.log(`${this.name} swims ${distance}m`);
  }

  public getPersonalName(): string {
    return this.hidePersonalName();
  }

  changePersonalName(newName: string) {
    this.personalName = newName;
  }

  private hidePersonalName() {
    return `Osito ${this.personalName.split("").reverse().join("").toUpperCase()}`;
  }
}

const bear = new Bear("Bear", 10);

bear.move(5); // Bear walks 5m
bear.swim(10); // Bear swims 10m

bear.changePersonalName("Yogi");
//console.log(bear.personalName);
console.log(bear.getPersonalName()); // Osito IGOY

export { Dog, Bear };
