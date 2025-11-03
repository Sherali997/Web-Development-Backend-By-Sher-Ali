// src/routes/tasks.js
const express = require('express');
const router = express.Router();

// Sample in-memory tasks list
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Test with Postman', completed: true, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Setup Git Repository', completed: false, priority: 'high', createdAt: new Date() },
  { id: 5, title: 'Write README', completed: false, priority: 'medium', createdAt: new Date() }
];

// GET /tasks -> return all tasks
router.get('/', (req, res) => {
  // convert Date objects to ISO strings for JSON consistency
  const serializable = tasks.map(t => ({ ...t, createdAt: t.createdAt.toISOString() }));
  res.json(serializable);
});

module.exports = { router, tasks };
