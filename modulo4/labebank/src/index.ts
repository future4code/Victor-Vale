import express, { request, Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './accounts'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log('servidor disponível na porta 3003'))


//exibir contas

app.get('/accounts', (req: Request, res: Response) => {
    let reqError = 400
    try{
        if(!accounts.length){
            throw new Error('Não foi encontrada nenhuma conta')
        }
        res.status(200).send(accounts)
        
    }
    catch(error: any){
        res.status(reqError).send({message: error.message})
    }

})

// consultar saldo 

app.get('/balance', (req: Request, res: Response) => {
    
})


