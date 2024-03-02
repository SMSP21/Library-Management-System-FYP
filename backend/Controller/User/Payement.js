// Import necessary modules
const express = require('express'); // Express is a web framework for Node.js
const stripe = require('stripe')('your_stripe_secret_key'); // Stripe library for handling payments
const bodyParser = require('body-parser'); // Middleware to parse incoming JSON data

// Create an instance of the Express application
const app = express();

// Set up middleware to parse incoming JSON data
app.use(bodyParser.json());

// Endpoint to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  // Extract the 'amount' from the request body
  const { amount } = req.body;

  // Create a payment intent using the Stripe API
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'NRS',
  });

  // Respond with the client secret of the created payment intent
  res.json({ clientSecret: paymentIntent.client_secret });
});

// Optional endpoint to handle webhook events from Stripe
app.post('/webhook', (req, res) => {
  // Extract the payload from the request body
  const payload = req.body;

  // Handle events here (e.g., payment success)

  // Respond with 'OK'
  res.status(200).send('OK');
});

// Start the server and make it listen on port 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
