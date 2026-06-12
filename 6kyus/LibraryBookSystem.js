/* Task

Create a class called Book.

    Properties:
title
author
isBorrowed(default: false)
Methods:
borrow()
returnBook()
Rules
Cannot borrow if already borrowed
Cannot return if not borrowed
Example
const book = new Book("Atomic Habits", "James Clear");

book.borrow();
book.borrow(); // ignored

console.log(book.isBorrowed); // true */


class Books{
    constructor(title,author){
        this.title=title;
        this.author=author;
        this.isBorrowed=false;
    }
    borrow(){
        if(this.isBorrowed)return;
         this.isBorrowed=true;
    }
    returnBook(){
    if(!this.isBorrowed) return;
    this.isBorrowed=false;
}
}
const book = new Books("Atomic Habits", "James Clear");
book.borrow();
book.borrow(); // ignored
book.returnBook();

console.log(book.isBorrowed);
