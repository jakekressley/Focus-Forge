import express from 'express';
import { login } from '../controllers/auth.js';

// allows Express to recognize that these routes will be configured
const router = express.Router();

router.post('/login', login);

export default router;