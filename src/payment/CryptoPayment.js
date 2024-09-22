require('dotenv').config();
const axios = require('axios');

class CryptoPayment {
  constructor() {
    this.apiKey = process.env.CRYPTO_API_KEY;
    this.apiUrl = process.env.CRYPTO_API_URL;
  }

  async createPayment(amount, currency) {
    try {
      const response = await axios.post(`${this.apiUrl}/payments`, {
        amount,
        currency
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error;
    }
  }

  async getPaymentStatus(paymentId) {
    try {
      const response = await axios.get(`${this.apiUrl}/payments/${paymentId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data.status;
    } catch (error) {
      console.error('Error getting payment status:', error);
      throw error;
    }
  }
}

module.exports = CryptoPayment;