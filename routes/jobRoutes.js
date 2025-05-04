const express = require('express');
const { createJob, getJobs, deleteJob } = require('../controllers/jobController.js');
const authMiddleware = require('../authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createJob);
router.get('/', authMiddleware, getJobs);
router.delete('/:id', authMiddleware, deleteJob);

module.exports = router;