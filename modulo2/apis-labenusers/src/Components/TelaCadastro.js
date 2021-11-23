import React from "react"
import axios from "axios"

export default class TelaCadastro extends React.Component{
    state = {
            nome: "",
            email: ""
        }

        handleNome = (event) => {
            this.setState ({nome: event.target.value})
        }
        handleEmail = (event) => {
            this.setState ({email: event.target.value})
        }
        fazerCadastro = () => {
            const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
            const body = {
                name: this.state.nome,
                email: this.state.email
            }
            axios.post(url, body, {
                headers:{ 
                    Authorization: "victor-vale-carver"
                }
            })
            .then((res)=>{
                console.log(res)
                alert("usuario cadastrado")
            })
            .catch((err)=>{
                console.log(err.response.data)
            })
           

            this.setState({nome: "", email: ""})
        }

    
    render(){
        

        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de Usuarios</button>
                <h2>Tela de Cadastro</h2>
                <input placeholder = "Nome" value = {this.state.nome} onChange = {this.handleNome}></input>
                <input placeholder = "email" value = {this.state.email} onChange = {this.handleEmail}></input>
                <button onClick = {this.fazerCadastro}>Cadastrar</button> 
            </div>
        )
    }
}