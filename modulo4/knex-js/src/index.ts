import express, {Request, Response} from 'express'
import {AddressInfo} from 'net'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`server is running in http://localhost:${address.port}`)
    }
})

