import logo from './logo.svg';
import './App.css';
import Etapa1 from './Components/Etapa1';
import React from "react"
import { render } from '@testing-library/react';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3'

export default class App extends React.Component{
  state = {
    mudaTela: 1,
  }
  onClickTrocaTela = () => {
    this.setState ({mudaTela: this.state.mudaTela +1 })
  }
  
  render(){
    console.log(this.state.mudaTela)
    return(
      <div>
        {this.state.mudaTela === 1 ? <div> <Etapa1/><button onClick = {this.onClickTrocaTela}>Proxima Etapa</button></div>: 
        this.state.mudaTela === 2 ? <div> <Etapa2/><button onClick = {this.onClickTrocaTela}>Proxima Etapa</button> </div>:
        <Etapa3/> }
        
        
      </div>  
    )
  }
}




