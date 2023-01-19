import { Router } from "express"
import { UrlController } from "../controllers/urlController"

const urlRoutes = Router()

urlRoutes.post('/api/url', UrlController.save)

export default urlRoutes