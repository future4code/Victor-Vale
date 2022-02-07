import express, {Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import connection from './connection'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/actor', async (req: Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
        INSERT INTO Actor
        (id, name, salary, birth_date, gender)
        VALUES (
            ${Date.now().toString()},
            "${req.body.name}",
            ${req.body.salary},
            "${req.body.birthDate}",
            "${req.body.gender}"
        )
        `)
        res.status(200).send({message:'Ator adicionado com sucesso!'})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage|| "ocorreu um erro inesperado")
    }
})

app.get('/actor', async (req: Request, res: Response): Promise<void> => {
    try {
        // const result = await connection.raw(`
        // SELECT * FROM Actor
        // `)
        // res.status(200).send(result[0])
        const result = await connection('Actor')
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage|| "ocorreu um erro inesperado")
    }
})

app.delete('/actor/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        await connection('Actor').where({id: req.params.id}).delete()
        res.status(200).send({message: 'Ator deletado com sucesso!'})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage || 'algo de errado não está certo')
    }
})

app.put('/actor/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        await connection('Actor').update({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender           
        }).where({id: req.params.id})
        res.status(200).send({message: 'Ator atualizado com sucesso!'})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage || 'algo de errado não está certo')
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`server is running in http://localhost:${address.port}`)
    }
    else{
        console.error('failure on startin server')
    }
})