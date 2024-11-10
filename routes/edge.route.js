import express from 'express'
import { createEdge, updateEdge, getAllEdges, deleteEdge, getEdge } from '../controllers/edge.controller.js';
const router = express.Router();


router.get('/getEdge', getEdge);
router.get('/getAllEdge', getAllEdges);
router.post('/createEdge', createEdge);
router.put('/updateEdge', updateEdge);
router.post('/deleteEdge', deleteEdge);

// similar routes for PUT (update) and DELETE (remove)

export default router;
