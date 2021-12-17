# library
The meat of this project involved using an object constructor and object methods to store the attributes of each book entry. Object methods were added to the constructor's prototype and thus are accessible to all objects created from the constructor. This allows the functionality of adding a new book to the library and changing a book's "Read" status. An additional functionlity is the ability to remove a book from the library, which is achieved through DOM manipulation and an array method.

The biggest challenge with this project was wiring the "Change Read Status" button, specifically figuring out how to make a button target its corresponding object. I initially thought that using "this" would make the task simple, but I soon realized that using "this" in an event listener on a button targets the button clicked instead of the object I was hoping for. My solution was to store each book's library index in a variable when the book's object is created, and use that index to access the object.

Future improvements could include adding a length limit to a book's entry so that very long entries don't overflow a card, and making the new book form popup in a layer on top of the library with some animation, instead of just having it appear on the page.


