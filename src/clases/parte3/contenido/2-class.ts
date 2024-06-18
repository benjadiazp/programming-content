interface Animal {
  name: string;
  type: string;
  ageInYears: number;
  move(distanceInMeters: number): void;
}

class Mammal implements Animal {
  name: string;
  type: string;
  ageInYears: number;

  constructor(name: string, ageInYears: number) {
    this.name = name;
    this.type = "Mammal";
    this.ageInYears = ageInYears;
  }

  move(distanceInMeters: number): void {
    console.log(`${this.name} moves ${distanceInMeters}m`);
  }
}

class Bird implements Animal {
  name: string;
  type: string;
  ageInYears: number;

  constructor(name: string, ageInYears: number) {
    this.name = name;
    this.type = "Bird";
    this.ageInYears = ageInYears;
  }

  move(distanceInMeters: number): void {
    console.log(`${this.name} flies ${distanceInMeters}m`);
  }
}

export { Mammal, Bird };
