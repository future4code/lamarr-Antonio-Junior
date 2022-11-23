import express, { Request, Response } from "express"
import { connection } from "./data/connection"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

async function getByName(name:string): Promise<any> {
    const result = await connection.raw(`
        SELECT 
            id, 
            name, 
            email, 
            type 
        FROM Exercicio_Filtros_Ordenacao WHERE name LIKE "%${name}%";
    `)
    return result[0]
}

app.get("/staff/name", async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name as string

        if (!name) {
            name = "%"
        }

        const staff = await getByName(name)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

async function getByType(type:string): Promise<any> {
    const result = await connection.raw(`
        SELECT 
            id, 
            name, 
            email, 
            type 
        FROM Exercicio_Filtros_Ordenacao WHERE type = "${type}";
    `)
    return result[0]
}

app.get("/staff/type/:type", async (req: Request, res: Response): Promise<void> => {
    try {
        let type = req.params.type as string

        const staff = await getByType(type)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})


async function getOrderBy(field:string): Promise<any> {
    const result = await connection.raw(`
        SELECT 
            id, 
            name, 
            email, 
            type 
        FROM Exerc_filtros_orden_paginac ORDER BY ${field};
    `)
    return result[0]
}

app.get("/staff/orderby", async (req: Request, res: Response): Promise<void> => {
    try {
        let field = req.query.field as string

        if (!field) {
            field = 'email'
        }

        const staff = await getOrderBy(field)

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff member found.")
        }

        res.status(200).send(staff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});