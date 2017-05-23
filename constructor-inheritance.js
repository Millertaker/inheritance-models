function Animal(age, name){
  this.age = age;
  this.name = name;
  this.saySomething = function(){
    console.log(
      "Hello! I'm" + this.name +
      " and I'm " + this.age +
      " years old!");
  }
}


let myAnimal = new Animal(3, 'Pepe');

function Cat(breed, weight, age, name){
  Animal.call(this, age, name);

  this.breed = breed;
  this.weight = weight;
  this.eat = function(){
  this.weight++;
    console.log("I'm "+
      this.name +
      " and I have increased my weight to "
      + this.weight);
  }
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

let myCat = new Cat('bengala', 5, 5, 'Simba');
console.log(myCat);
