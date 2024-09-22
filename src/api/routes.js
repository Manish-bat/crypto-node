const express = require('express');
const Blockchain = require('../blockchain/Blockchain');
const Block = require('../blockchain/Block');
const CryptoPayment = require('../payment/CryptoPayment');

const router = express.Router();
const blockchain = new Blockchain();
const cryptoPayment = new CryptoPayment();

router.get('/blockchain', (req, res) => {
  res.json(blockchain);
});

router.post('/mine', (req, res) => {
  const newBlock = new Block(blockchain.chain.length, Date.now(), req.body.data);
  blockchain.addBlock(newBlock);
  res.json({
    message: "New block mined successfully",
    block: newBlock
  });
});

router.post('/payment', async (req, res) => {
  try {
    const payment = await cryptoPayment.createPayment(req.body.amount, req.body.currency);
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Error creating payment' });
  }
});

router.get('/payment/:id', async (req, res) => {
  try {
    const status = await cryptoPayment.getPaymentStatus(req.params.id);
    res.json({ status });
  } catch (error) {
    res.status(500).json({ error: 'Error getting payment status' });
  }
});

module.exports = router;