import connection from "../connection";
import { Request, Response } from "express";
import { Product } from "../types";

const getProducts = async(req: Request, res: Response) => {
    try {
        const search = req.query.search
        if(!search){
            const products : Product [] = await connection('labecommerce_products')
            res.status(200).send(products)
        }
        else{
            const products : Product [] = await connection('labecommerce_products').where('name', 'like', `%${search}%`)
            res.status(200).send(products)
        }
        
    } catch (error: any) {
        res.status(200).send({message: error.message || "algo deu errado"})
    }
}
export default getProducts