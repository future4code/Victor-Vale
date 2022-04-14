export class Pokemon {
    constructor(
      private name: string,
      private pokedexNumber: number,
      private generation: number,
      private type: string,
      private statTotal: number,
      private atk: number,
      private def: number,
      private sta: number
    ) {}
}