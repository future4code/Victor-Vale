import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px; 
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }

    componentDidMount() {
       this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers:{
                Authorization: "victor-vale-carver"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("ocorreu um problema, tente novamente")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,{
            headers:{
                Authorization: "victor-vale-carver"
            }
        })
        .then((res) => {
            alert("usuario deletado")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("ocorreu um erro")
        })
    }

    render(){
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((x) => {
            return <CardUsuario key={x.id}>
                {x.name}
                <button onClick={() => this.deletarUsuario(x.id)}>Deletar Usuário</button>
                </CardUsuario>
        })
        return (

            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Tela de cadastro</button>
                <h2>Tela Lista de Usuarios</h2>
                {listaUsuarios}
            </div>

        )
    }
}