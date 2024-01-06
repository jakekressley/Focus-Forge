import express from 'express';
import {
    getUser
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// read routes where we grab info, not change anything in database
/* READ */
// the random uniqueid that mongo uses to store info
router.get("/:id", verifyToken, getUser);

/* UPDATE */
export default router;