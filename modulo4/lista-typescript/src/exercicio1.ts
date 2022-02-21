const nameAndAge = (name: string, date: string) => {
    return console.log(`Olá me chamo ${name}, nasci no dia ${date.split('/', 1)} do mês de ${date.split('/', 2).splice(1, 1)} 
    do ano de ${date.split('/', 3).splice(2, 1)}`)
}
nameAndAge('Victor', '30/09/1994')