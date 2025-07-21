import { useEffect, useState } from "react"
import { Link } from "react-router"

export const Books = () => {
  
  const [books, setBooks] = useState([]);


  const bookData = 'https://seussology.info/api/books';


  useEffect(() => {
    fetch(bookData)
    .then((res) => res.json())
    .then((data) => {setBooks (data)

    })
  }, []);
  
  
  return (
    <>
    <h1>Books</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
            <img src={book.image} alt={book.title} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}