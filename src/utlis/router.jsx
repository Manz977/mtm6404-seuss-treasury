import App from "../App"
import { Books } from "../routes/Books.jsx"
import { Quotes } from "../routes/Quotes.jsx"
import { Book } from "../routes/Book.jsx"
import { createBrowserRouter } from "react-router"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Books />
      },
      {
        path: '/quotes/',
        element: <Quotes />
      }
    ]
  },
  {
    path: '/books/:id',
    element: <Book />
  },
]);

export default router;