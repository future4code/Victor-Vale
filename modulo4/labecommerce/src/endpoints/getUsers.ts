import connection from "../connection";
import { Request, Response } from "express";
import { User } from "../types";

const getUsers = async (req: Request, res: Response) => {
    try {
        const users : User[] = await connection("Labecommerce_users")
        res.status(200).send(users)
    } catch (error:any) {
        res.status(400).send({message:error.message || "Ocorreu um erro"})
    }
}
export default getUsers