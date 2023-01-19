import express from 'express'
import cors from 'cors'
import * as swaggerUi from 'swagger-ui-express';

const app = express()
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))