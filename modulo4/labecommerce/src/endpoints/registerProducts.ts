import express, {Request, Response} from 'express'
import connection from '../connection'
import { Product, User } from '../types'

const registerProducts = async(req: Request, res: Response) => {
    try {
        const {name, price, image_url} = req.body
        if(!name || !price || !image_url){
            throw new Error ("um ou mais campos estão faltando")
        }
        const product : Product = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }
        await connection ("labecommerce_products").insert(product)
        res.status(200).send({message: "Produto registrado com sucesso!"})
    } catch (error: any) {
        res.status(400).send({message:error.message || "Algo deu errado"})
        
    }
}
export default registerProducts