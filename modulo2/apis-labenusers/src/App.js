// EXERCICIO CARTÃO DE CRÉDITO MOE

import React from "react"
import axios from "axios"

export default class MeuComponente extends React.Component{
  state = {
    usuarios: [],
    inputValueNome:"",
    inputValueEmail:""

  }
  handleInputChangeNome = (event) => {
    this.setState({inputValueNome: event.target.value})
  }
  handleInputChangeEmail = (event) => {
    this.setState({inputValueEmail: event.target.value})
  }

  getUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "victor-vale-carver"
          }
        }
      )
      .then((res) => {
        this.setState ({usuarios: res.data.resul.list})
        console.log(res.data.result.list)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
  
  onClickCriar = () => {
    const body = {
      name: this.state.inputValueNome,
      email: this.state.inputValueEmail
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "victor-vale-carver"
          }
        }
      )
      .then((res) => {
        this.setState({inputValueNome: ""})
        this.setState({inputValueEmail: ""})
        this.getUsuarios()
        alert("usuário adicionado com sucesso!")
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
  
  render(){
    const listaUsuarios = this.state.usuarios.map((x) => {
      <li key={x.id}>{x.name}</li>
    })
    return(
      <div>
        <div>
          <input placeholder = "nome" value = {this.state.inputValueNome} onChange = {this.handleInputChangeNome}/>
          <input placeholder = "e-mail" value = {this.state.inputValueEmail} onChange = {this.handleInputChangeEmail}/>
          <button onClick = {this.onClickCriar}>enviar</button>
        </div>
        <ul>{listaUsuarios}</ul>
      </div>

    )
  }
}