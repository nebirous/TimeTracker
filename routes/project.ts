import { Router } from "express";
import { getProjects, getProject, postProject, putProject, deleteProject } from "../controllers/projectController";


const router = Router();

router.get('/api/:idUser', getProjects);
router.get('/api/:id', getProject);
router.post('/api/', postProject);
router.put('/api/:id', putProject);
router.delete('/api/:id', deleteProject);

export default router;