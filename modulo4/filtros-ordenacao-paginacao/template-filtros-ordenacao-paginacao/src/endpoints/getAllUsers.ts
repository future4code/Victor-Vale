import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function getUserByName(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const name = req.query.name
      const result = await connection("aula48_exercicio").where('name', 'like', `%${name}%`)
      const users = result.map(toUser)
      res.status(200).send(users)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

export async function getUserByType(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const type = req.query.type
      const result = await connection("aula48_exercicio").where('type', 'like', `${type}`)
      const users = result.map(toUser)
      res.status(200).send(users)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toUser = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}