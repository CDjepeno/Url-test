import { Router } from "express"
import { UrlController } from "../controllers/urlController"

const urlRoutes = Router()

urlRoutes.post('/api/url', UrlController.save)
urlRoutes.get('/api/shorturl/analytics', UrlController.stat)

export default urlRoutes