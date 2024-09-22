# Crypto Node.js App Prototype

This is a prototype Node.js application demonstrating blockchain and cryptocurrency payment integration.

## Features

- Simple blockchain implementation
- Cryptocurrency payment system integration
- RESTful API for interacting with the blockchain and payment system

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up environment variables:
- Copy the `.env.example` file to `.env`:
  ```
  cp .env.example .env
  ```
- Open `.env` and update the values:
  ```
  CRYPTO_API_KEY=your_api_key_here
  CRYPTO_API_URL=https://api.yourpaymentprovider.com/v1
  ```
4. Start the application with `npm start`

## API Endpoints

- GET /api/blockchain - Get the current state of the blockchain
- POST /api/mine - Mine a new block
- POST /api/payment - Create a new cryptocurrency payment
- GET /api/payment/:id - Get the status of a payment

