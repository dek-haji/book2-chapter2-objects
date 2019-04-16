/* Write a JavaScript program to list the properties of a JavaScript object.
Sample object:  and the Sample Output will be : name,sclass,rollno*/ 
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };
    console.log(`the ouput will be ${student.name}, ${student.sclass}, ${ student.rollno}`)

/* Write a JavaScript program to delete the rollno property from the following object. Also print the object
 before or after deleting the property. */
 var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };

    console.log(student)
    delete student.rollno
    console.log(student)

/* Write a JavaScript program to get the length of an JavaScript object. */
Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    console.log(`the book name is ${library[1].title} and the auther name is ${library[1].author}. the reading status of the book is: ${library[1].readingStatus}`)

//              using for loop to give keys and values.

    for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }