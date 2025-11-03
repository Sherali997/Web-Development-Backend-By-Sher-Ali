const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'high', createdAt: new Date() },
  { id: 3, title: 'Test API with Postman', completed: false, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Learn Express Router', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 5, title: 'Document API', completed: false, priority: 'high', createdAt: new Date() },
];

// GET /tasks route (already exists)
router.get('/', (req, res) => {
  res.json(tasks);
});

// ✅ ADD this for Assignment 3: GET /tasks/:id route
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

module.exports = router;
