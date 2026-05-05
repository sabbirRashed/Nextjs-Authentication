import BookCard from '@/components/bookCard';
import React from 'react';

const BooksPage = async() => {
    // const res = await fetch("http://localhost:5000/books", {cache: "no-store"});  //SSR
    // const res = await fetch("http://localhost:5000/books", {cache: "force-cache"});  //SSG
    const res = await fetch("http://localhost:5000/books", {next:{revalidate: 9}});  //ISR
    const books = await res.json();
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className=' mt-10'>Books: {books.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {
                    books.map(book=> <BookCard
                    key={book.id}
                    book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;