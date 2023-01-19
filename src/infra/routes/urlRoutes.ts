import { Router } from "express"
import { UrlController } from "../controllers/urlController"

const urlRoutes = Router()

urlRoutes.post('/api/url', UrlController.save)
urlRoutes.get('/api/shorturl/analytics', UrlController.stat)
urlRoutes.get('/api/shorturl/:code', UrlController.redirect)

export default urlRoutes