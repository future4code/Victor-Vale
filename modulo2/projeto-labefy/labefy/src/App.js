import React from "react"
import axios from "axios"

export default class TelaCadastro extends React.Component{
    state = {
            playlists: [],
            nome: ""
        }

        componentDidMount() {
          this.pegarPlaylists()
       }

        handleNome = (event) => {
            this.setState ({nome: event.target.value})
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
                console.log(res)
                alert("playlist criada!")
            })
            .catch((err)=>{
                console.log(err.response.data)
            })
           

            this.setState({nome: ""})
        }

        pegarPlaylists = () => {
          const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
          axios.get(url, {
              headers:{
                  Authorization: "victor-vale-carver"
              }
          })
          .then((res) => {
              this.setState({playlists: res.data})
          })
          .catch((err) => {
              alert("ocorreu um problema, tente novamente")
          })
      }

    
    render(){
        console.log(this.state.playlists)
        

        return (
            <div>
                <input placeholder = "Nome da playlist" value = {this.state.nome} onChange = {this.handleNome}></input>
                <button onClick = {this.criarPlaylist}>Cadastrar</button> 
            </div>
        )
    }
}