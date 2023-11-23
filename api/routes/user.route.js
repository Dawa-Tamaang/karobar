import express from 'express';
import { test, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
router.get('/test', test);
router.get('/listings/:id', verifyToken, getUserListings)


export default router;