import XLSX from 'xlsx'

const workbook: XLSX.WorkBook = XLSX.readFile("pokemon_go.xlsx")


export const json_data = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"])