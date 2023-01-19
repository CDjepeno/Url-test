import express from 'express'
import cors from 'cors'
import * as swaggerUi from 'swagger-ui-express';
import urlRoutes from './routes/urlRoutes';

const app = express()
app.use(express.json());
app.use(cors());

app.use(urlRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))