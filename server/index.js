import express from 'express'
import { connection } from './postgres/postgres.js';
import router from './view/routes.js';
import cors from 'cors'

const app = express();
app.use(express.json()); // Ensure this is present
app.use(cors());
app.use(router);

const PORT = "8000";


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

connection();