import express, { Express } from "express"
import cors from 'cors'
import {AddressInfo} from 'net'
import registerUsers from "./endpoints/registerUser"
import registerProducts from "./endpoints/registerProducts"
import getUsers from "./endpoints/getUsers"
import getProducts from "./endpoints/getProducts"
import registerPurchases from "./endpoints/registerPurchases"
import getUserPurchases from "./endpoints/getUsersPurchases"



const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`server is running on port http://localhost:${address.port}`)
    }
    else{
        console.log('failure upon starting server')
    }
})

//EndPoints relacionados aos usuários
app.post('/users', registerUsers)
app.get('/users', getUsers)


//EndPoints relacionados aos produtos
app.post('/products', registerProducts)
app.get('/products', getProducts)

//EndPoints relacionados a compras
app.post('/purchases', registerPurchases)
app.get("/users/:user_id/purchases", getUserPurchases)

