import express from 'express';
import bodyParser from 'body-parser';
import { login, register, logout } from '../controllers/loginController.js';

const router = express.Router();

router.use(bodyParser.json());

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

export default router;