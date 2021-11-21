import React from "react"
import axios from "axios"

export default class App extends React.Component{
    state = {
            playlists: [],
            nome: "",
            detalhes:[],
            faixa: [],
            musica: "",
            banda: "",
            link: ""
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
                console.log("Essa playlist tem" ,res.data.result.quantity, "musicas")
                console.log("músicas:", res.data.result.tracks)
            }).catch((err) => {
                console.log(err)
            })
            
            if(this.state.mostraDetalhes === false){
                return this.setState({mostraDetalhes: true})
            } else{
                return this.setState({mostraDetalhes: false})
            }



        }

        handleMusica = (event) => {
            this.setState ({musica: event.target.value})
        }
        handleBanda = (event) => {
            this.setState ({banda: event.target.value})
        }
        handleLink = (event) => {
            this.setState ({link: event.target.value})
        }
        
        adcionarMusicas = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
            const body = {
                name: this.state.musica,
                artist: this.state.banda,
                url: this.state.link
            }
            axios.post(url, body, {
                headers:{
                    Authorization: "victor-vale-carver"
                }
            }).then((res) => {
                alert("Música adicionada com sucessso")
                this.setState({faixa: res.data.result})
            }).catch((err) => {
                console.log(err.data)
                alert("Erro ao adicionar música")
            })
            this.setState({musica: ""})
            this.setState({banda: ""})
            this.setState({link: ""})
        }
        
     
    
    render(){
        
        const listaPlaylists = this.state.playlists.map((x) => {
            return <li key={x.id}>
                {x.name}
                <button onClick={() => this.deletarPlaylist(x.id)}>Deletar Playlist</button>
                <button onClick = {() => this.pegarInformacoes(x.id)}> Ver informações </button>
                <div>
                    <button onClick = {()=> this.adcionarMusicas(x.id)}>Adicionar Músicas</button>
                    <input placeholder = "Música" onChange = {this.handleMusica}/>
                    <input placeholder = "Artista" onChange = {this.handleBanda}/>
                    <input placeholder = "link" onChange = {this.handleLink}/>
                </div> 
                </li>
        
        })
        
        return (
            <div>
                <input placeholder = "Nome da playlist" value = {this.state.nome} onChange = {this.handleNome}></input>
                <button onClick = {this.criarPlaylist}>Criar</button> 
                <h2>Lista de Playlists</h2>
                <ul>{listaPlaylists}</ul>
                

            </div>
        )
    }
}