

// ++++++++Object literals:

const book1 = {
    title: "Book one",
    author: "John Doe",
    year: 2013,
    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`)
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
const book3 = new Book("Book Three", "Jane Doe", "2016");

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

/*  const mag1 = new Magazine("Mag One", "John Smith", "2018", "Jan")

 console.log(mag1.getSummary()); // >> error.  */


 // In order to inherit the prototype methods of "Book":

 // Inherit prototype:

 Magazine.prototype = Object.create(Book.prototype);


 const mag1 = new Magazine("Mag One", "John Smith", "2018", "Jan")


 console.log(mag1.getSummary())
 console.log(mag1)


 // Use magazine Constructor:

 Magazine.prototype.constructor = Magazine;

 console.log(mag1)
 



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

  console.log(book4)

  //same thing with different syntax:

  const book5 = Object.create(bookProtos, {
    title: {value: "Book five"},
    author: {value: "Ivan Cankar"},
    year: {value: "1902"}
  });

  console.log(book5)



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
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `The book ${this.title} was written by ${this.author} in ${this.year}.`
    }
 }


 // Magazine Subclass:

 class MagazineSubClass extends BookClass2 {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
 }

 // Instatiate Magazine:

 const mag2 = new MagazineSubClass("Mag Two", "Marcel Štefančič", "2020", "Jun");

 console.log(mag2)
 console.log(mag2.getSummary()) //works


 // Note: Using sublasses is easier than using INheritance with ES5. But its important to understand whats going on underneath.
