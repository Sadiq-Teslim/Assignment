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
        return this.isMember;
    }
}
class Library {
    constructor() {
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
        this.books.filter(b => b.isAvailable).forEach(b => {
            console.log(`- ${b.title} [${b.category}]`);
        });
    }
    borrowBook(bookId, memberId) {
        const book = this.books.find(b => b.id === bookId);
        const member = this.members.find(m => m.membershipId === memberId);
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
const book2 = new Book(2, "1984", "Dystopian");
const member1 = new Member("Alice", "M001");
const member2 = new Member("Bob", "M002");
nithubLibrary.addBook(book1);
nithubLibrary.addBook(book2);
nithubLibrary.addMember(member1);
nithubLibrary.addMember(member2);
