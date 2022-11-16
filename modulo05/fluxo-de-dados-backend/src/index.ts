import express from "express"
import cors from "cors"
import { products } from './data';

const app = express();

app.use(express.json());

app.use(cors());

app.get("/test", (req, res) => {
    res.send("Servidor está rodando na porta http://localhost:3003.")
})

