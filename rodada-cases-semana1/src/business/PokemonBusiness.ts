import { Pokemon } from "../entities/Pokemon"
import { PokemonRepository } from "./PokemonRepository"

export class PokemonBusiness {

    private pokemonDatabase: PokemonRepository

    constructor(pokemonDatabaseImp: PokemonRepository) {
        this.pokemonDatabase = pokemonDatabaseImp
    }

    public getById = async (id: number): Promise<Pokemon[]> => {

        const pokemon = await this.pokemonDatabase.getById(id)

        if (!pokemon.length) {
            throw new Error('Nenhum pokemon encontrado')
        }

        return pokemon
    }

    public filterPokemon = async (name: string, type: string): Promise<Pokemon[]> => {

        const result = await this.pokemonDatabase.filterPokemon(name, type)

        if (!result.length) {
            throw new Error('Nenhum pokemon encontrado')
        }

        return result
    }

}