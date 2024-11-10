import express from 'express'
import { createNode, deleteNode, getAllNodes, getNode, updateNode } from '../controllers/node.controller.js';
const router = express.Router();


router.get('/getNode', getNode);
router.get('/getAllNode', getAllNodes);
router.post('/createNode', createNode);
router.put('/updateNode', updateNode);
router.post('/deleteNode', deleteNode);

// similar routes for PUT (update) and DELETE (remove)

export default router;
