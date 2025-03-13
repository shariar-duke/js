class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic animal sound...");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    super.makeSound(); // ✅ Calls the parent class method
    console.log("Woof! Woof!"); // ✅ Additional behavior for Dog
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();
// Outputs:
// Some generic animal sound...  (from Animal)
// Woof! Woof!  (from Dog)
