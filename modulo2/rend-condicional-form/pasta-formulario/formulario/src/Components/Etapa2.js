import React from "react"
import App from "../App"

export default class Etapa2 extends React.Component{
    state = {
        curso:"",
        instituicao: "",
       
    }

    onChangeCurso = (event) => {
        this.setState({nome: event.target.value})
    }
    onChangeInstituicao = (event) => {
        this.setState({idade: event.target.value})
    }

    render(){
        return(
            <div>
                <p>Digite o curso:</p>
                <input placeholder = "Curso" onChange = {this.onChangeCurso} value = {this.state.curso}/>
                <p>Digite a instituição:</p>
                <input placeholder = "Curso" onChange = {this.onChangeInstituicao} value = {this.state.instituicao}/>

            </div>
        )
    }
}