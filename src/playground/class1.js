class Person{
    constructor(name='Anonymous',age='0'){
        this.name=name;
        this.age=age
    }

    getGreetings(){
        return `Hello there ${this.name}`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major
    }

    hasMajor(){
        return !!(this.major)
    }

    getDescription(){
        let description=super.getDescription()
        if(this.hasMajor()){
            description+=` and his major is ${this.major}`
        }
        return description


    }
}

class Traveller extends Person{

    constructor(name,age,location){
        super(name,age);
        this.location=location
    }

    locationCheck(){
       return !!(this.location)
    }


    getGreetings(){
        let greetings= super.getGreetings();

        if(this.locationCheck()){
            greetings+=` and he lives in ${this.location}`
        }
        
        return greetings;

    }
}



// const me= new Student('Sahil Sharma',21,'Computer Science');

// const you=new Student()


// console.log(you.getDescription())
// console.log(me.getDescription())

const me =new Traveller('Sahil Sharma','21','Bay City')
console.log(me.getGreetings());

const you= new Traveller();
console.log(you.getGreetings())