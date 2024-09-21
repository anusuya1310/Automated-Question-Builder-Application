// routes/questions.js
const express = require('express');
const db = require('../db');
const router = express.Router();

// Create a new question
router.post('/', (req, res) => {
  const { question, options, answer } = req.body;
  const sql = 'INSERT INTO questions (question, options, answer) VALUES (?, ?, ?)';
  db.query(sql, [question, JSON.stringify(options), answer], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, question, options, answer });
  });
});

// Get all questions
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM questions';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
});

module.exports = router;