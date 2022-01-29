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
    const queriedName = req.query.name
    if(!queriedName){
        res.status(400).send('faltou a query name!')
    }

    const searchResult = []

    for(let user of users){
        for(let playlist of user.playlists){
            if(playlist.name.includes(queriedName)){
                searchResult.push({
                    id: playlist.id,
                    name: playlist.name
                })
            }
        }
    }
    res.send({
        result:{
            quantity: searchResult.length,
            list: searchResult
        }
    })

})

app.post('/playlists', (req: Request, res: Response) => {
    const playlistName = req.body.name
    const userIdToAdd = req.headers.authorization

    for(let i = 0 ; i < users.length; i++){
        if(users[i].id === userIdToAdd){
            users[i].playlists.push({
                id: Date.now().toString(),
                name: playlistName,
                tracks:[]
            })
        }
    }

    res.send({users})


})

app.post('/playlists/:playlistId/tracks', (req: Request, res: Response) => {
    const playlistIdToAdd = req.params.playlistId
    const userIdToAdd = req.headers.authorization
    const {name, artist, url} = req.body

    res.send({playlistIdToAdd, userIdToAdd, name, artist, url})
})

