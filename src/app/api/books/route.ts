import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), 'books.json');

const readBooksFromFile = () => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

const saveBooksToFile = (books: any[]) => {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2), 'utf8');
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get('filter');

  let books = readBooksFromFile();

  if (filter && filter !== "All") {
    books = books.filter((book: any) => book.language === filter);
  }

  return NextResponse.json(books);
}

export async function POST(req: Request) {
  const newBook = await req.json();
  const books = readBooksFromFile();

  newBook.id = (books.length + 1).toString();
  books.push(newBook);

  saveBooksToFile(books);
  return NextResponse.json(newBook, { status: 201 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  let books = readBooksFromFile();

  books = books.filter((book: any) => book.id !== id);

  saveBooksToFile(books);
  return NextResponse.json({ message: 'Book deleted successfully' });
}

export async function PUT(req: Request) {
  const updatedBook = await req.json();
  const { id, ...updatedDetails } = updatedBook;

  let books = readBooksFromFile();

  const bookIndex = books.findIndex((book: any) => book.id === id);

  if (bookIndex === -1) {
    return NextResponse.json({ message: 'Book not found' }, { status: 404 });
  }

  books[bookIndex] = { ...books[bookIndex], ...updatedDetails };

  saveBooksToFile(books);
  return NextResponse.json(books[bookIndex]);
}
