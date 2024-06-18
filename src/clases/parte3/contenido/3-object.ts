import { Mammal, Bird } from "./2-class";

const mammal1 = new Mammal("Dog", 5);
const mammal2 = new Mammal("Bear", 10);

const bird1 = new Bird("Eagle", 2);
const bird2 = new Bird("Penguin", 1);

mammal1.move(10); // Dog moves 10m
mammal2.move(5); // Bear moves 5m
bird1.move(20); // Eagle flies 20m
bird2.move(5); // Penguin flies 5m
