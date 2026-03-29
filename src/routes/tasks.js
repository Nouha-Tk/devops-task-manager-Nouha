const express = require('express');
const router = express.Router();

// GET all tasks from MongoDB
router.get('/', async (req, res) => {
  const db = req.app.locals.db;
  const tasks = await db.collection('tasks').find().toArray();
  res.json(tasks);
});

// POST new task into MongoDB
router.post('/', async (req, res) => {
  const db = req.app.locals.db;

  const { title, completed } = req.body;

  const newTask = { title, completed };

  const result = await db.collection('tasks').insertOne(newTask);

  res.status(201).json(newTask);
});

module.exports = router;