

// ++++++++Object literals:

const book1 = {
    title: "Book one",
    author: "John Doe",
    year: 2013,
    getSummary() {
        //console.log(`${this.title} was written by ${this.author} in ${this.year}`)
        return `The book ${this.title} was written by ${this.author} in ${this.year}.`
    },
    getAuthor() {
        console.log(`The author of the book is ${this.author}`)
    }
}

//console.log(book1.getSummary());

document.querySelector("h1").addEventListener("click", book1.getSummary.bind(book1)); //works
document.querySelector("h2").addEventListener("click", () => book1.getAuthor()); //works

document.querySelector("h3").addEventListener("click", book1.getSummary); //doesnt work
// returns: "was written by undefined in undefined" --> "this" is undefined


//------------------------------------------------------------------


// +++++++++Constructor

function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;


/*     this.getSummary = function() {
        return `The book ${this.title} was written by ${this.author} in ${this.year}.`
    }
 */
} // doesnt make sense to put the same method on all the instances of the book object, instead, put it on the prototype

// Instatiate an Object

const book2 = new Book("Book Two", "John Doe", "2013");
const book3 = new Book("Book Three", "Jane Dow", "2016");

//getSummary method on prototype:

Book.prototype.getSummary = function() {
    return `The book ${this.title} was written by ${this.author} in ${this.year}.`
}

//getAge on prototype:

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`
}

// Revise/Change year:

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}


console.log(book2)
 book2.revise("2020");
console.log(book2)


//-----------------------------------------------------------------

//++++++++ Inheritance


//Magazine Constructor

 function Magazine(title, author, year, month) {            
    Book.call(this, title, author, year, month);

    this.month = month;

 }
 
 /* +++: 1. Inherit Properties: In your Magazine constructor function, you're calling the Book constructor function using Book.call(this, ...) to inherit properties from the Book constructor. 
 This is known as constructor chaining. */


const mag1a = new Magazine("Mag One", "John Smith", "2018", "Jan")

 // console.log("1A", mag1a.getSummary()); // >> error.  


 // In order to inherit the prototype methods of "Book":

 // Inherit prototype:

 Magazine.prototype = Object.create(Book.prototype);

/* +++: 2. Inherit Prototype (with Methods): You're setting the prototype of the Magazine constructor to a new object created with Object.create(Book.prototype). This establishes a prototype chain where Magazine.prototype inherits from Book.prototype. This step ensures that instances of Magazine inherit the methods defined in Book.prototype. */


 const mag1 = new Magazine("Mag One", "John Smith", "2018", "Jan")


 console.log(mag1.getSummary());
 console.log(mag1, "HERE");


 // Use magazine Constructor:

 Magazine.prototype.constructor = Magazine;

 /* +++: 3. Set Magazine Constructor: To maintain the correct constructor reference, you set Magazine.prototype.constructor to Magazine. This step is important because, after step 2, the constructor reference on Magazine.prototype would be pointing to Book. By resetting it to Magazine, you ensure that instances of Magazine correctly report their constructor as Magazine. 
 ALSO: In practice, it's a good practice to set the constructor reference correctly to align with the intended type of the object. However, the absence of step 3 won't prevent your code from working; it just might make it less intuitive and harder to debug in some cases.*/

 Magazine.prototype.someMethod = function(){
    return "word"
 }

 console.log(mag1, "Tukaj")
/* 
 for(let keys in mag1) {
    console.log(keys, " FOR IN LOOP MAG1");
 }  //for in loop gre tudi čez propertija prototype chaina

 console.log(Object.entries(mag1)); */
 



 //-----------------------------------------------------------------

 //Different ways to create an object.

 /* Iz mojih zapiskov:
    Object literal: {}
    Object constructor: new Object()
    Object.create method: Object.create(proto)
    Factory functions: let calculator = createNewCalculator(...)
    Constructor functions. let calculator = new Calculator() //ali brez "( )" 
    Classes */



 // Object create:

  // Object of Protos:

  const bookProtos = {
    getSummary: function() {
        return `The book ${this.title} was written by ${this.author} in ${this.year}.`
    },
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`
    }
  }


  // Create object:

  const book4 = Object.create(bookProtos);
  book4.title = "Book Four";
  book4.author = "Ivan Cankar";
  book4.year = "1899";

  console.log(book4, "BOOK 4")

  //same thing with different syntax:

  const book5 = Object.create(bookProtos, {
    title: {value: "Book five"},
    author: {value: "Ivan Cankar"},
    year: {value: "1902"}
  });

  console.log(book5, "BOOK 5")



//-----------------------------------------------------------------

// ES6: Classes 

 class BookClass {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `The book ${this.title} was written by ${this.author} in ${this.year}.`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    //++++static method:+++
    static topBookStore() {
        return "Mladinska knjiga"
    }
 }


 // Instatiate Object:

 const book6 = new BookClass("Book Six", "Miško Kranjec", "1940");

 console.log(book6);
 book6.revise("1950")
 console.log(book6);
 console.log(BookClass.topBookStore())



 //-------------------------------------------------------------------

 // Subclasses:


 class BookClass2 {
    constructor(title, author, year, color) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.color = color;
    }

    static value = "Over 9000!";

    getSummary() {
        return `The book ${this.title} was written by ${this.author} in ${this.year}.`
    }

    static sayHello() {
        console.log("Hello!")
    }
 }


 // Magazine Subclass:

 class MagazineSubClass extends BookClass2 {
    constructor(color, title, author, year, month) {
        super(title, author, year, color);
        this.month = month;
    }
 }

 // Instatiate Magazine:

 const mag2 = new MagazineSubClass("Red", "Mag Two", "Marcel Štefančič", "2020", "Jun");

 console.log(mag2, " tukaj 2")
 console.log(mag2.getSummary()) //works


 for(let key in mag2) {
    console.log(key, " KEY IN MAG2") //for in loop ne gre čez propertije prototype chaina
 }

 console.log(Object.keys(mag2));


 // Note: Using sublasses is easier than using INheritance with ES5. But its important to understand whats going on underneath.


 