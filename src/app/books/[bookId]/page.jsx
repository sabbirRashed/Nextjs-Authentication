export const generateStaticParams = async()=>{
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();

    return books.slice(0, 3).map(book => ({bookId: book.id}))
}

const BookDetails = async({params}) => {
    const {bookId} = await params
    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const book = await res.json();
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h2 >Book id: {bookId}</h2>
            <p className='text-2xl'>{book.title}</p>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetails;