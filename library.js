"use strict";
class Book {
    constructor(id, title, category, isAvailable = true) {
        this.isAvailable = true;
        this.id = id;
        this.title = title;
        this.category = category;
        this.isAvailable = isAvailable;
    }
    borrow() {
        if (!this.isAvailable) {
            console.log(`${this.title} is not available.`);
        }
        else {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        }
    }
    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}
class Member {
    constructor(name, membershipId, isMember = true) {
        this.isMember = true;
        this.name = name;
        this.membershipId = membershipId;
        this.isMember = isMember;
    }
    validateMembership() {
        if (!this.isMember) {
            console.log(`${this.name} is not a valid member.`);
            return false;
        }
        else {
            return true;
        }
    }
}
class Library {
    constructor(books = [], members = []) {
        this.books = [];
        this.members = [];
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    listAvailableBooks() {
        console.log("Available books:");
        this.books
            .filter((b) => b.isAvailable)
            .forEach((b) => {
            console.log(`- ${b.title} [${b.category}]`);
        });
    }
    borrowBook(bookId, membershipId) {
        const book = this.books.find((b) => b.id === bookId);
        const member = this.members.find((m) => m.membershipId === membershipId);
        if (book && (member === null || member === void 0 ? void 0 : member.validateMembership())) {
            book.borrow();
        }
        else {
            console.log("Cannot borrow the book.");
        }
    }
}
const nithubLibrary = new Library();
const book1 = new Book(1, "The Great Gatsby", "Fiction");
const book2 = new Book(2, "University Physics", "Education");
const book3 = new Book(3, "The Catcher in the Rye", "Fiction");
const member1 = new Member("Alice", "M001");
const member2 = new Member("Bob", "M002");
nithubLibrary.addBook(book1);
nithubLibrary.addBook(book2);
nithubLibrary.addMember(member1);
nithubLibrary.addMember(member2);
// Trying to Borrow a book
console.log("\nBooks before borrowing:");
nithubLibrary.borrowBook(2, "M002");
// Available books after borrowing
console.log("\nBooks after borrowing:");
nithubLibrary.listAvailableBooks();
// Trying to borrow the same book again
console.log("\nTrying to borrow again:");
nithubLibrary.borrowBook(2, "M002");
// Returning the book
console.log("\nBooks after returning:");
book2.returnBook();
//Checking available books again
console.log("\nAvailable books after returning:");
nithubLibrary.listAvailableBooks();
