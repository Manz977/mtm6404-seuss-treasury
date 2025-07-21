import { useEffect, useState } from "react";

export const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.slice(0, 10));
      });
  }, []);

  return (
    <>
      <h1>Quotes</h1>
      <main className="content">
        <ul className="quotes">
          {quotes.map((quote, index) => (
            <li key={index}>
              <h2>{quote.title}</h2>
              <p>{quote.text}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};