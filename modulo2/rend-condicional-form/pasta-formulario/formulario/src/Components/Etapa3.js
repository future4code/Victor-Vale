import React from "react"
import App from "../App"

export default class Etapa3 extends React.Component{
    state = {
        pos: "",
        tecnico: "",
    }

    onChangePos = (event) => {
        this.setState({nome: event.target.value})
    }
    onChangeTecnico = (event) => {
        this.setState({idade: event.target.value})
    }
    render(){
        return(
            <div>
                <p>Pós Graduação:</p>
                <input placeholder = "Curso" onChange = {this.onChangePos} value = {this.state.Pos}/>
                <p>Curso Técnico:</p>
                <input placeholder = "Curso" onChangeInstituicao = {this.onChangeTecnico} value = {this.state.tecnico}/>

            </div>
        )
    }
}