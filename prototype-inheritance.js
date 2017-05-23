function Animal(age, name) {
  return {
    age: age,
    name: name,
    saySomething: function(){
      console.log(
        "Hello! I'm" + this.name +
        " and I'm " + this.age +
        " years old!");
    }
  }
};

let myAnimal = Animal(5, 'Pepe');

function Cat(breed, weight, age, name){
  let myFactory = Object.create(Animal( age, name ));

  myFactory.weight = weight;
  myFactory.breed = breed;
  myFactory.eat = function(){
    this.weight++;
    console.log("I'm "+
      this.name +
      " and I have increased my weight to "
      + this.weight);
  }

  return myFactory;
}

let myCat = Cat('bengala', 5, 5, 'Simba');
myCat.eat();
