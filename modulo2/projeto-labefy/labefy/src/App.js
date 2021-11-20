import React from "react"
import axios from "axios"

export default class TelaPlaylists extends React.Component{
    state = {
            playlists: [],
            nome: "",
            detalhes:[]
        }

        componentDidMount() {
          this.pegarPlaylists()
       }

        handleNome = (event) => {
            this.setState ({nome: event.target.value})
        }

        pegarPlaylists = () => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            axios.get(url, {
                headers:{
                    Authorization: "victor-vale-carver"
                }
            })
            .then((res) => {
                this.setState({playlists: res.data.result.list})
            })
            .catch((err) => {
                alert("ocorreu um problema, tente novamente")
            })
        }
       
        criarPlaylist = () => {
            const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            const body = {
                name: this.state.nome
            }
            axios.post(url, body, {
                headers:{ 
                    Authorization: "victor-vale-carver"
                }
            })
            .then((res)=>{
                alert("playlist criada!")
                this.pegarPlaylists()
            })
            .catch((err)=>{
                console.log(err.response.data)
            })
           

            this.setState({nome: ""})
        }

        deletarPlaylist = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

            axios.delete(url,{
                headers:{
                    Authorization: "victor-vale-carver"
                }
            })
            .then((res) => {
                alert("Playlist deletada")
                this.pegarPlaylists()
            })
            .catch((err) => {
                alert("ocorreu um erro")
            })
        }

        pegarInformacoes = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
            axios.get(url, {
                headers:{
                    Authorization: "victor-vale-carver"
                }
            }).then((res) => {
                this.setState({detalhes: res.data})
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            }) 
        }
       

    
    render(){
        console.log("playlists", this.state.playlists)
        const listaPlaylists = this.state.playlists.map((x) => {
            return <div key={x.id}>
                {x.name}
                <button onClick={() => this.deletarPlaylist(x.id)}>Deletar Playlist</button>
                <button onClick = {() => this.pegarInformacoes(x.id)}> Ver informações </button>
                <button>Adicionar Músicas</button> 
                </div>
        })
        
        return (
            <div>
                <input placeholder = "Nome da playlist" value = {this.state.nome} onChange = {this.handleNome}></input>
                <button onClick = {this.criarPlaylist}>Criar</button> 
                <h2>Lista de Playlists</h2>
                <h4>{listaPlaylists}</h4>

            </div>
        )
    }
}