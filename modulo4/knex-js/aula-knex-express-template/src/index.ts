import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.post('/actor', async (req:Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES (
                ${Date.now().toString()},
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birthDate}",
                "${req.body.gender}"
            )
        `)
        res.status(201).send("ator criado")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get ('/actor', async (req: Request, res: Response): Promise<void> => {
    try {
        const resultado = await connection.raw(`
            SELECT * FROM Actor;
        `)
        res.status(200).send({message: resultado[0]})
        
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
app.get ('/searchactorbyname', async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${req.body.name}"
        `)
        res.status(200).send({message: result[0]})
        
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
