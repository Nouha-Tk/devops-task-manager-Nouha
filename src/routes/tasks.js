const express = require('express');
const router = express.Router(); 
const tasks = [
  { id: 1, title: "Initial task", completed: true },
  { id: 2, title: "Install Git and Node.js", "completed": true },
  { id: 3, title: "Learn DevOps basics", completed: false },
  { id: 4, title: "New Branch", completed: true}
  
];

router.get('/', (req, res) => {
    res.json(tasks);
});

module.exports = router;