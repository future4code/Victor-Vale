import React from 'react'
import { useRequestData } from '../Hooks/CustomHooks';
import styled from 'styled-components';
import { useHistory } from "react-router-dom"

const CardTrip = styled.div`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
 
`
const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 20px;

`

function Travels(props) {
  const history = useHistory()
  const [tripsList, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trips')
  const list = tripsList.map((x) => {
    return(
      <CardTrip key = {x.id} goToFormPage = {props.goToFormPage}>
        <h2>{x.name}</h2>
        <h4>{x.description}</h4>
        <h4>Planeta: {x.planet}</h4>
        <h4>Data: {x.date}</h4>
        <h4>Duração: {x.durationInDays} dias</h4>
        <button onClick = {()=> history.push(`/form/${x.id}`)}>Se inscrever nessa Viagem</button>
      </CardTrip>
    )
  })

  return (
    <div>
      <h1>Viagens Disponíveis</h1>
      <button onClick = {() => props.changePage('Home')}>Voltar para Home</button>
      <ContainerDiv>
        {list}
      </ContainerDiv>
      
    </div>
  );
}

export default Travels;
