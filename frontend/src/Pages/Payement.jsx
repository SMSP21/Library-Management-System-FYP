import React from "react";
import { Link } from "react-router-dom";
import onlinelibrary from "../assets/onlineLibrary1.png";


const PaymentMethodOption = ({ method, iconBg, iconName }) => (
  <div className="payment-option">
    
    <div className="icon-name">{iconName}</div>
  </div>
);

const PaymentDetails = () => {
    const handlePayNowClick = () => {
      const isConfirmed = window.confirm("Are you sure you want to proceed with the payment?");
      if (isConfirmed) {
        // Perform the payment logic here
        console.log("Payment confirmed. Processing...");
      } else {
        console.log("Payment canceled.");
      }
    }};
return(
    <>
      <img src={onlinelibrary} className="background-image" alt="Payment process background" />
      <main className="content">
        <h1 className="title">Payment Details</h1>
        <section className="payment-info">
        <div className="form-group">
            <label htmlFor="Book ID" className="visually-hidden">Book ID:</label>
            <input id="Book ID" type="text" placeholder="Book ID" aria-label="Full Name" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="fullName" className="visually-hidden">Full Name:</label>
            <input id="fullName" type="text" placeholder="Full Name" aria-label="Full Name" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="amount" className="visually-hidden">Amount:</label>
            <input id="amount" type="text" placeholder="Amount" aria-label="Amount" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="remarks" className="visually-hidden">Remarks:</label>
            <input id="remarks" type="text" placeholder="Remarks" aria-label="Remarks" className="input-field" />
          </div>
          <section className="payment-methods">
          <h2 className="method-title">Choose Payment Method:</h2>
          <div className="method-options">
            <div className="mark-button">
            <input type="checkbox" id="mark" />
            <PaymentMethodOption method="Stripe" iconName="💳"  />
            <label htmlFor="iconName">Stripe</label>
            {/* Add more payment options here */}
            </div>
          </div>
          
        </section>
        </section>
         
        <footer className="actions">
          <button className="pay-now"onClick={handlePayNowClick}>Pay now</button>
          <Link to="/Place-reservations">
            <button className="go-back">BACK</button>
          </Link>
        </footer>
      </main>
    
    
    <style jsx>{`
      .payment-details {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .header {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
      }

      .background-image {
        width: 100%;
        object-fit: cover;
        height: 100%;
        opacity: 0.8; /* Adjust opacity as needed */
        position: absolute;
        inset: 0;
      }

      .content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
      }

      .title {
        background-color: #733;
        color: #fff;
        padding: 15px 60px ; /* Adjusted padding to remove space above the title */
        font-size: 30px;
        font-family: Inter, sans-serif;
        border-radius: 50px;
       
      }
      

      .payment-info {
        border-radius: 67px;
        background-color: #d9d9d9;
        display: flex;
        flex-direction: column;
        padding: 25px 60px;
      }
      
      .payment-method {
        margin-bottom: 20px;
      }

      .method-title {
        font-size: 40px;
        color: #000;
        font-weight: 400;
        font-family: Inter, sans-serif;
      }

      .method-options {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 18px;
      }

      .payment-option {
        display: flex;
        align-items: center;
        gap: 10px;
      }

     

      .icon-name {
        font-family: Inter, sans-serif;
      }

      .form-group {
        margin-top: 15px;
        width: 100%;
      }

      .input-field {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      .actions {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-top: 30px;
      }

      .pay-now, .go-back {
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
      }

      .pay-now {
        background-color: #4CAF50;
        color: white;
      }

      .go-back {
        background-color: #f44336;
        color: white;
      }

      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
      .pay-now:hover {
        background-color: #45a049; /* Change the color when hovered */
      }

      .go-back:hover {
        background-color: #d32f2f; /* Change the color when hovered */
      }
      .payment-methods {
        margin-top: 10px;
      }

      .method-title {
        font-size: 30px;
        color: #000;
        font-weight: 400;
        font-family: Inter, sans-serif;
      }

      .method-options {
        display: flex;
        justify-content: center;
        gap: 0px;
        margin-top: 18px;
      }

      .payment-option {
        display: flex;
        align-items: center;
        gap: 0px;
        cursor: pointer;
      }

      .icon-bg {
        border-radius: 0%;
        width: 0px;
        height: 0px;
      }

      .icon-name {
        font-family: Inter, sans-serif;
      }
      
      .mark-button {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 20px;
        padding-top: -10px;
      }

      .mark-button label {
        font-size: 16px;
        color: #333;
      }

      .mark-button input {
        cursor: pointer;
      }

      .mark-button input:checked + label {
        font-weight: bold;
      }
    `}</style>
  </>
);

export default PaymentDetails;