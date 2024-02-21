import React from "react";
import { Link } from "react-router-dom";
import onlinelibrary from "../assets/onlineLibrary1.png";

function BookSearch() {
  const buttons = [
    { id: "booksSearch", text: "Books Search" },
    { id: "viewDataInfo", text: "View Data Info" },
    { id: "returnBook", text: "Return Book" },
    { id: "placeOrder", text: "Place Order" },
    { id: "logout", text: "Logout", route: "/Signout" }
  ];

  return (
    <>
      <header className="header">
        <section className="banner">
          <img src={onlinelibrary} alt="" className="backgroundImage" />
          <div className="bannerContent">
            <img src={onlinelibrary} alt="Library Logo" className="libraryLogo" />
            <h1>Library Management System</h1>
          </div>
        </section>
        <nav className="navigationContainer">
          {buttons.map((button) => (
            <Link key={button.id} to={button.route || "/"}>
              <button className="menuButton">
                {button.text}
              </button>
            </Link>
          ))}
        </nav>
      </header>
      <main className="mainContent">
        <section className="searchSection">
          <h2>Books Search</h2>
          <form className="searchForm">
            <label htmlFor="bookName" className="visually-hidden">Book name</label>
            <input type="text" id="bookName" className="textInput" placeholder="Book name" aria-label="Book name" />
            <button type="submit" className="searchButton">Search</button>
          </form>
          <form className="searchForm">
            <label htmlFor="bookId" className="visually-hidden">Book ID</label>
            <input type="text" id="bookId" className="textInput" placeholder="Book ID" aria-label="Book ID" />
          </form>
          <form className="searchForm">
            <label htmlFor="authorName" className="visually-hidden">Author Name</label>
            <input type="text" id="authorName" className="textInput" placeholder="Author Name" aria-label="Author Name" />
          </form>
          <button className="searchButton">Search</button>
        </section>
      </main>
      <style jsx>{`
        .header {
          background-color: #fff;
          padding-top: 8px;
        }
        .banner {
          display: flex;
          flex-direction: column;
          box-shadow: 0px 50px 4px 0px rgba(0, 0, 0, 0.25);
          position: relative;
        }
        .backgroundImage, .libraryLogo, .featureImage {
          width: 100%;
          object-fit: cover;
        }
        .bannerContent {
          position: relative;
          padding: 1rem 65px 50px;
          color: #f5f5f5;
          text-align: center;
        }
        .navigationContainer {
          background-color: rgba(119, 51, 51, 0.99);
          display: flex;
          justify-content: space-around;
          padding: 1rem 0;
          color: #f5f5f5;
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
        .mainContent {
          padding: 2rem;
        }
        .searchSection h2 {
          color: #f5f5f5;
          margin: 0 0 1rem 0;
        }
        .searchForm {
          display: flex;
          margin-bottom: 1rem;
          justify-content: space-between;
        }
        .textInput {
          padding: 0.5rem;
          margin-right: 1rem;
        }
        .searchButton {
          background-color: #d9d9d9;
          cursor: pointer;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          border 0;
          padding: 0;
          white-space: nowrap;
          clip-path: inset(50%);
          clip: rect(0 0 0 0);
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
export default BookSearch;
