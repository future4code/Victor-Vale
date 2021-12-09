import React from 'react'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../Hooks/CustomHooks';
import styled from 'styled-components';

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

function Admin(props) {
  const history = useHistory()
  const [tripsList, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trips')
  const list = tripsList.map((x) => {
    return(
      <CardTrip key = {x.id}>
        <h2>{x.name}</h2>
        <h4>{x.description}</h4>
        <h4>Planeta: {x.planet}</h4>
        <h4>Data: {x.date}</h4>
        <h4>Duração: {x.durationInDays} dias</h4>
        <button onClick = {()=> history.push(`/admin/trips/${x.id}`)}>Ver Detalhes dessa viagem</button>
      </CardTrip>
    )
  })

    return (
    <div>
        <h1>Administrativo</h1>
        <button onClick = {()=> history.push('/')}>Voltar para Home</button>
        <button onClick = {() => history.push('/admin/create')}>Criar viagens</button>
        <ContainerDiv>
        {list}
      </ContainerDiv>
    </div>
  );
}

export default Admin;


