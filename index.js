// Your code here

// cat
class Cat{
    constructor(name, sex){
        this.name= name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`;
    }
}
let cat =new Cat("Sasha", "female")
cat.speak();

// dog
class Dog{
    constructor(name, sex){
        this.name= name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`;
    }
}
let dog =new Dog("Rufio", "male")
dog.speak();


// brid

class Bird{
    constructor(name, sex){
        this.name= name;
        this.sex = sex;
    }
    speak(){
        if(this.sex === "male"){
            return `It's me! ${this.name}, the parrot!`;
        }else {
            return `${this.name} says squawk!`
        }
    }  
}
let bird = new Bird("Pablo", "male");
let bird2 = new Bird("Mable", "female");

bird.speak();
bird2.speak();

