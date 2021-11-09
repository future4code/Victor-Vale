import React from "react"
import App from "../App"

export default class Etapa1 extends React.Component{
    state = {
        nome:"",
        idade: "",
        email:"",
        escolaridade:"",
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }
    onChangeIdade = (event) => {
        this.setState({idade: event.target.value})
    }
    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }
    
    onChangeEscolaridade = (event) => {
        this.setState({escolaridade: event.target.value})
    }

    render(){
        return(
            <div>
                <p>1- Digite seu nome</p>
                <input placeholder = "nome" onChange = {this.onChangeNome} value = {this.state.nome}/>

                <p>2- Digite sua idade</p>
                <input placeholder = "idade" onChange = {this.onChangeIdade} value = {this.state.idade}/>

                <p>3- Digite seu email</p>
                <input placeholder = "E-mail" onChange = {this.onChangeEmail} value = {this.state.email}/>

                <p>4- Digite sua formação</p>
                <select onChange = {this.onChangeEscolaridade} value = {this.state.escolaridade}>
                    <option value = "Ensino médio imcompleto"> Ensino médio incompleto </option>
                    <option value = "Ensino médio completo"> Ensino médio completo </option>
                    <option value = "Ensino superior imcompleto"> Ensino superior incompleto </option>
                    <option value = "Ensino superior completo"> Ensino superior completo </option>
                </select>

            </div>
        )
    }
}