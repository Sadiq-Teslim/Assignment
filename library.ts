class Book {
    public id: number;
    public title: string;
    public category: string;
    public isAvailable: boolean = true;
    constructor(id: number, title: string, category: string, isAvailable: boolean = true) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.isAvailable = isAvailable;
    }

  borrow(): void {
    if (!this.isAvailable) {
      console.log(`${this.title} is not available.`);
    } else {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed.`);
    }
  }

  returnBook(): void {
    this.isAvailable = true;
    console.log(`${this.title} has been returned.`);
  }
}

class Member {
    public name: string;
    public membershipId: string;
    public isMember: boolean = true;
  constructor(name: string, membershipId: string, isMember: boolean = true) {
    this.name = name;
    this.membershipId = membershipId;
    this.isMember = isMember;
  } 
  validateMembership(): boolean {
    return this.isMember;
  }
}

class Library {
  private books: Book[] = [];
  private members: Member[] = [];
  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  addMember(member: Member): void {
    this.members.push(member);
  }

  listAvailableBooks(): void {
    console.log("Available books:");
    this.books.filter(b => b.isAvailable).forEach(b => {
      console.log(`- ${b.title} [${b.category}]`);
    });
  }

  borrowBook(bookId: number, memberId: string): void {
    const book = this.books.find(b => b.id === bookId);
    const member = this.members.find(m => m.membershipId === memberId);
    if (book && member?.validateMembership()) {
      book.borrow();
    } else {
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
