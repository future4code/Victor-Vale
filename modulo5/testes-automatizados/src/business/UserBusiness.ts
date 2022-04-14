import { SignupInputDTO } from "../entities/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {

    signup(input: SignupInputDTO){
        if (!input.name || !input.email || !input.password) {
    
            throw new Error('"name", "email" and "password" must be provided')

         }

         const idGenerator = new IdGenerator()
         const id: string = generateId()
   
         const cypherPassword = await hash(password);
   
         await connection('labook_users')
            .insert({
               id,
               name,
               email,
               password: cypherPassword
            })
   
         const token: string = generateToken({ id })
    }

}