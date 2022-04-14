import { Request, Response } from "express";
import connection from "../connection";
import { generate } from "../services/idGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const {email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      const [user] = await connection('Usuários')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generate()

      const newUser: user = { id : generate(),
          email, 
          password }

      await connection('Usuários')
         .insert(newUser)

      res.status(201).send({ newUser })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}