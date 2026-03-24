import React, { useEffect, useState } from 'react';

function Products({ onAddToCart }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=programming')
      .then(res => res.json())
      .then(data => {
        const result = data.docs.slice(0, 12).map(book => ({
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
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center' }}>📚 All Books</h2>

      <div className="abdeltwab">
        {books.map(book => (
          <div className="card" key={book.id}>
            <img src={book.image} alt={book.title} />

            <div className="card-body">
              <h5>{book.title}</h5>

              <button className="btn" onClick={onAddToCart}>
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;