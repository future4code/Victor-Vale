import express, { Request, Response } from 'express'
import {users} from './data'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log('servidor disponível na porta 3003'))

// app.get('/test/hello', (req: Request, res: Response) => {
//     const myQuery = req.query.name
//     res.send (`olá ${myQuery}!`)
// })

// app.get('/test/:number', (req: Request, res: Response) => {
//     res.send (
//         `seu numero da sorte é ${Number(req.params.number)}!`
//     )
// })

app.get('/playlists/search', (req: Request, res: Response) => {
    const playlistName = req.query.name
    if(!playlistName){
        res.status(400).send('faltou a query name!')
    }
    res.send({playlistName})

})

