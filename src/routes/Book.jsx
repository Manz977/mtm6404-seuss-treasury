import { useEffect, useState } from "react"
import { Nav } from "../components/Nav"
import { useParams } from "react-router"

const SingleBook = ({ book }) => {
  return (
    <>
        {book && (
          <div className="book">
            <img src={book.image} alt={book.title} />
            <div className="book-t-d">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            </div>
          </div>
        )}
    </>
  )
}

export const Book = () => {
  const [book, setBook] = useState(null);
  const params = useParams();

  const bookData = `https://seussology.info/api/books/${params.id}`;

  useEffect(() => {
    fetch(bookData)
    .then((res) => res.json())
    .then((data) => setBook(data));
  }, []);



  return (
    <>
    <Nav />
    <main className="content">
      <SingleBook book={book} />
    </main>
    </>
  )
}


