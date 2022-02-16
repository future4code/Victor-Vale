import express, {Request, Response} from 'express'
import connection from '../connection'
import { User } from '../types'

const registerUsers = async(req: Request, res:Response) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            throw new Error ("Um ou mais campos não foram preenchidos")
        }

        const user : User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        await connection ("Labecommerce_users").insert(user)
        res.status(200).send({message: 'Usuário cadastrado com sucesso!'})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default registerUsers