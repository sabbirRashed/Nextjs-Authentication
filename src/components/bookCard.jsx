import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    const { id, title, author, descriptio } = book
    return (
        <div className="card bg-base-100 card-sm shadow-sm border border-base-300">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <div className="justify-end card-actions">
                    <Link href={`/books/${id}`}>
                        <button className="btn btn-sm btn-primary">Show Details...</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;