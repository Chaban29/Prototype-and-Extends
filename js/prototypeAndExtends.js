"use strict";

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.eats);
console.log(rabbit.jumps);
// console.log(rabbit.walk());

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function () {
  alert("Rabbit, skik-skik");
};

console.log(rabbit.walk);

let animalValueMetod = {
  name: "Rabbit",
  eats: true,
  walk() {
    return `${this.name} is walking`;
  },
};

let rabbit = {
  jump: true,
  __proto__: animal,
};

console.log(rabbit.eats);
console.log(rabbit.jump);
console.log(rabbit.walk());

let animalProp = {
  walk() {},
};

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function () {
  alert("Кролик, скік-скік");
};

rabbit.walk();

let user = {
  name: "Roman",
  surname: "Chaban",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

admin.fullName = 'Bogdan Smith';
console.log(user.fullName);
console.log(admin.fullName);

console.log(rabbit.sleep());
alert(rabbit.isSleeping);
alert(animal.isSleeping);
console.log(Object.keys(rabbit));
for (let prop in rabbit) alert(prop);

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    alert(`Your ${prop}`);
  } else {
    alert(`Extends: ${prop}`);
  }
}

let animalOne = {
  eats: true,
  animalEat() {
    return `Animal eat is ${this.eats}`;
  },
  walk() {
    return `Animal walking`;
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(rabbit.animalEat());

console.log(longEar.jumps);
console.log(longEar.walk());

console.log(longEar);

let animalTwo = {
  name: "Chico",
  walk() {
    return `Rabbit name is: ${this.name}`;
  },
};

let rabbit = {
  name: "Bunny",
  __proto__: animal,
};

rabbit.walk = function () {
  return `Rabbit name is: ${this.name}`;
};

console.log(rabbit.walk());
console.log(animal.walk());

let userTwo = {
  name: "Alan",
  surname: "Smith",
  get fullName() {
    return `user name is ${this.name}, user surname is ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  isAllowed() {
    console.log(this);
  },
};

let admin = {
  isAdmin: true,
  __proto__: user,
};

admin.fullName = "Roman Chaban";

console.log(user.fullName);
console.log(admin.fullName);

user.isAllowed();

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert("I'm going");
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

rabbit.sleep();
alert(rabbit.isSleeping);
alert(animal.isSleeping);

// let animal = {
//   eats: true,
// };

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

alert(Object.keys(rabbit));

for (let prop in rabbit) alert(prop);

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    alert(`Your ${prop}`);
  } else {
    alert(`Extends for ${prop}`);
  }
}

console.log(rabbit);

// let animal = {
//   jumps: null,
// };

let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps);

delete rabbit.jumps;

alert(rabbit.jumps);

delete animal.jumps;

alert(rabbit.jumps);

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.sheet);
console.log(bed.pen);
console.log(pockets.pen);

// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal going!");
//   },
// };

let rabbit = {
  jumps: true,
};

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

rabbit.__proto__ = animal;

console.log(rabbit.eats);
console.log(rabbit.jumps);

longEar.walk();

// let animal = {
//   eats: true,
//   walk() {},
// };

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function () {
  alert("Rabbit, Skik-Skik!");
};

rabbit.walk();

// let user = {
//   name: "John",
//   surname: "Smith",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

let admin = {
  isAdmin: true,
  __proto__: user,
};

admin.fullName = "Roman Chaban";

console.log(user.fullName);
console.log(admin.fullName);

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert("I'm going");
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

rabbit.sleep();

alert(rabbit.isSleeping);
alert(animal.isSleeping);

for (let prop in animal) {
  console.log(prop);
}

// let animal = {
//   eats: true,
// };

let rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(Object.keys(rabbit));

for (let prop in rabbit) {
  console.log(rabbit.hasOwnProperty(prop));
}

// const user = {
//   name: "Roman",
//   age: 22,
//   lvl: 40,
//   coins: 10,
// };

const admin = {
  isAdmin: true,
};

admin.__proto__ = user;

console.log(admin);
