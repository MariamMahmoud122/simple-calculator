import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Card({ onAddToCart }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=novel')
      .then(res => res.json())
      .then(data => {
        const result = data.docs.slice(0, 3).map(book => ({
          id: book.key,
          title: book.title,
          image: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150"
        }));
        setBooks(result);
      });
  }, []);

  return (
    <>
      <h3 className="text-center my-4 typing-text">
        {" Featured Books".split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>{char}</span>
        ))}
      </h3>

      <div className="abdeltwab">
        {books.map(book => (
          <div className="card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <div className="card-body">
              <h5>{book.title}</h5>
              <ScrollLink
                to="shop"       // Scroll إلى Section الـ Shop
                smooth={true}
                duration={500}
                className="btn"
                onClick={onAddToCart}
              >
                More
              </ScrollLink>
            </div>
          </div>
        ))}
      </div>

      <ScrollLink
        to="shop"
        smooth={true}
        duration={500}
        className="nos"
        style={{ cursor: 'pointer' }}
      >
        Go to Shop 🛒
      </ScrollLink>
    </>
  );
}

export default Card;