import React, { useState } from 'react';
import { Link } from "react-router-dom";
import onlinelibrary from "../assets/onlineLibrary1.png";
import librarybook from "../assets/librarybook.png";
import profileIcon from "../assets/profileIcon.jpg"; // Import your profile icon image

function AddBook() {
  const [bookInfo, setBookInfo] = useState({
    bookID: '',
    title: '',
    author: '',
    cost: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddBook = () => {
    // Implement logic to add book using bookInfo state
    console.log("Adding Book:", bookInfo);
  };

  const handleStatistics = () => {
    // Implement logic for showing statistics
    console.log("Viewing Statistics");
  };

  const buttons = [
    { id: "Add books", text: "Add Books" },
    { id: "Book search", text: "Book Search", route: "/book-search" },
    { id: "Book update", text: "Book Update" },
    { id: "View reservations", text: "View Reservations", route: "/View-reservations" },
    { id: "Signout", text: "Signout", route: "/Signout" }
  ];

  return (
    <>
      <header className="header">
        <h1 className="title">Library Management System</h1>
        <img src={onlinelibrary} alt="Library Background" className="header-image"/>
        <nav className="navigation">
          {buttons.map((button) => (
            <Link key={button.id} to={button.route || "/"}>
              <button className="menuButton">
                {button.text}
              </button>
            </Link>
          ))}
        </nav>
      </header>
      <main className="main-content">
        <section className="book-management">
          <h2 className="section-title">Add books</h2>
          <img src={librarybook} alt="Add book illustration" className="section-image"/>
          <div className="book-fields">
            <input
              type="text"
              name="bookID"
              value={bookInfo.bookID}
              placeholder="Book ID"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="title"
              value={bookInfo.title}
              placeholder="Title"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="author"
              value={bookInfo.author}
              placeholder="Author"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="cost"
              value={bookInfo.cost}
              placeholder="Cost"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="quantity"
              value={bookInfo.quantity}
              placeholder="Quantity"
              onChange={handleInputChange}
            />
          </div>
          <div className="add-book">
            <button className="add-book-button" onClick={handleAddBook}>
              Add
            </button>
            <button className="statistics-button" onClick={handleStatistics}>
              Statistics
            </button>
          </div>
        </section>
      </main>
      
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 80px;
          background-color: #fff;
        }
        .header-image {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            object-position: center;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            opacity: 0.8; /* Added opacity */
        }
        .title {
          color: #f5f5f5;
          font: 400 50px Inter, sans-serif;
          margin-top: 20px;
        }
        .navigation {
          display: flex;
          justify-content: space-between;
          background-color: #773333;
          padding: 20px 40px;
          box-shadow: 0 15px 4px rgba(0, 0, 0, 0.25);
        }
        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }
        .book-management {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .section-title {
          font-size: 35px;
          color: #f5f5f5;
          font-weight: 700;
        }
        .section-image {
          margin-top: 20px;
          width: 35%;
          aspect-ratio: 2.08;
          object-fit: cover;
        }
        .book-fields, .add-book {
          width: 100%;
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
          font-size: 30px;
          color: #f5f5f5;
          font-weight: 700;
        }
        .field, .add-book-button, .statistics-button {
          background-color: #d9d9d9;
          padding: 10px 20px;
          border-radius: 5px;
        }
        .menuButton {
            font-family: Inter, sans-serif;
            border-radius: 30px;
            box-shadow: 0px 20px 4px 0px rgba(0, 0, 0, 0.25);
            padding: 1rem;
            background-color: rgba(29, 2, 33, 0.58);
            color: #e6f624;
            cursor: pointer;
          }
  
          .menu-button:hover {
              background-color: #2b27ee;
              color: #fff;
          }
      `}</style>
    </>
  );
}

export default AddBook;