import { Request, Response, Router } from "express";
import { getUsers, getUser, postUser, putUser, deleteUser } from "../controllers/userController";


const router = Router();

router.get('/new', (req: Request, res: Response) => {
    res.send('Form');
})

// API
router.get('/api', getUsers);
router.get('/api/:id', getUser);
router.post('/api', postUser);
router.put('/api/:id', putUser);
router.delete('/api/:id', deleteUser);

export default router;