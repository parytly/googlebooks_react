import React, { useState, useEffect }  from "react";
import API from "../utils/API"

function Search() {
      // Setting our component's initial state
  const [books, setBooks] = useState([])
//   const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };

    return (
        <>
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Books" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
            </div>
        </div>

        <div>
            <h1> My Books </h1>
              <ul>
                {books.map(book => (
                  <li key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                  </li>
                ))}
              </ul>
        </div>
        </>
    );
}
  
  export default Search;