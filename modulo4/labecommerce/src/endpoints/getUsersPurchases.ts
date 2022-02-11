import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../types";



const getUserPurchases = async (req: Request, res: Response) => {
    try {
        const {user_id} = req.params
        const user: User [] = await connection("Labecommerce_users").where({id:user_id})

        if(!user){
            throw new Error ("Usuário não encotrado")
        }

        const userPurchases = await connection("labecommerce_purchases").select(
            "labecommerce_purchases.id",
            "labecommerce_purchases.product_id",
            "labecommerce_products.name as product_name",
            "labecommerce_products.image_url",
            "labecommerce_products.price as product_price",
            "labecommerce_purchases.quantity",
            "labecommerce_purchases.total_price"

        )
        .innerJoin(
            "Labecommerce_users",
            "Labecommerce_users.id",
            "labecommerce_purchases.user_id"
        )
        .innerJoin(
            "labecommerce_products",
            "labecommerce_products.id",
            "labecommerce_purchases.product_id"
        )
        .where({ user_id })

        if(!userPurchases.length){
            throw new Error("não foram encontradas compras para esse usuário")
        }

    res.status(200).send({ purchases: userPurchases })

    } catch (error:any) {
        res.status(400).send({message:error.message || "Algo deu errado"})
    }
}
export default getUserPurchases 