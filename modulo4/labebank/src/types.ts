export type Account = {
    name: string,
    cpf: number,
    birthday: string,
    balance: number,
    statement: Transaction[]
}
export type Transaction = {
    description : string,
    value: number,
    date: string
}