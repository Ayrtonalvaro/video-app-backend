import express from 'express'
import {} from '../controllers/comment.js'
import { verifyToken } from '../verifyToken.js'
import { addVideo } from '../controllers/video.js'

const router = express.Router()

//create a video
router.post('/', verifyToken, addVideo)
router.put('/:id', verifyToken, addVideo)
router.delete('/:id', verifyToken, addVideo)
router.get('/find/:id', addVideo)
router.get('/trend', addVideo)
router.get('/random', addVideo)
router.get('/sub', addVideo)


export default router