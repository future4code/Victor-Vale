import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import cors from 'cors'
import {AddressInfo} from 'net'

type User ={
    name:string,
    nickName:string,
    email:string
}

type Task ={
    title : string,
	description : string,
	limitDate : string,
    creatorUserId:number
}

// Criar usuário

app.post('/user', async(req:Request, res: Response) => {
    try{
        if(!req.body.name || !req.body.nickName || req.body.email){
            throw new Error ("Dados incompletos!")
        }
        const newUser: User = {
            name: req.body.name,
            nickName: req.body.nickName,
            email: req.body.email
        }
        await connection('toDoListUser').insert(newUser)
        res.status(200).send(`Usuário ${newUser.name} criado com sucesso`)

    }catch(error){
        // res.status(400).send({message:error.message})
        console.log({error})
    }
})

// Pegar usuário pelo ID 

app.get('/user/:id',async(req:Request,res:Response)=>{
    if(!req.params.id){
        throw new Error('parametro ID não informado')}
    try{
        const idParams = req.params.id
        const result = await connection('toDoListUser').select('id','name').where({id:idParams})
        res.send(result)
    }catch(error){
        res.status(400).send({message:error})
        console.log({message:error})
    }
})

//Editar Usuário

app.put('/edituser/:id', async(req:Request,res:Response)=>{
    try{
        if(!req.body.name || !req.body.nickname|| !req.body.email){
            throw new Error ('Dados incompletos!')
        }

        const userUpdate : User = {
            name : req.body.name,
            nickName : req.body.nickName,
            email : req.body.email
        }

        const idParams = req.params.id
        await connection('toDoListUser').update(userUpdate).where({id:idParams})
        res.status(200).send(`Usuário ${userUpdate.name} atualizado!`)

    }catch(error){
        res.status(400).send({message:error})
        console.log({message:error})
    }
})
