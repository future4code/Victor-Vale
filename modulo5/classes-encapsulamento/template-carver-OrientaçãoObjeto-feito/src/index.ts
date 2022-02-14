import { Request, Response } from "express";
import app from "./app"
import { CharacterDataBase } from "./data/CharacterDatabase";
import { Character } from "./types";

app.post("/character", (req: Request, res: Response) => {
    try {
        const { name, gender, age, description } = req.body;

        const character = new Character(name, gender, age, description)

        const characterDB = new CharacterDataBase()
        characterDB.createCharacter(character)

    } catch (error: any) {
        res.status(400).send(error.message | error.sqlMessage)
    }

})

