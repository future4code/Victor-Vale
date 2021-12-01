import React from 'react'
import HomePage from './HomePage/HomePage'
import MatchesPage from './MatchesPage/MatchesPage'
import { createGlobalStyle } from "styled-components"
import Header from './Components/Header'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding: 0;
    width: 40vw;
    min-height: 70vh;
    border: 1px solid black;
    margin-left: 25%;
    margin-top: 5%;
    
  }
`


export default class App extends React.Component {
  state = {
    currentPage: ''
  }
  choosePage = () => {
    switch(this.state.currentPage){
      case 'Home':
        return <HomePage/>
      case "MatchesPage":
        return <MatchesPage />
      default:
        return <HomePage/>
    }
  }
  changePage = (pageName) => {
    this.setState({currentPage: pageName})
  }
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header changePage = {this.changePage}/>
        {this.choosePage()}
      </div>
    )
  }

}
    


