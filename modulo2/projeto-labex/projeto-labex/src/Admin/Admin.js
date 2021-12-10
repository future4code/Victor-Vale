import React from 'react'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../Hooks/CustomHooks';
import styled from 'styled-components';
import axios from 'axios';

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


function Admin() {

  const history = useHistory()
  const [tripsList, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trips')
  // const [tripId, setTripId] = useState('')

  const deleteTrip = (tripId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/trips/${tripId}`
    const token = localStorage.getItem('token')
    const headers = {
      headers:{
        auth: token
      }
    }
    
    axios.delete(url, headers)
    .then((res)=>{
      console.log('deletou', res)
      // setTripId(tripId)
    })
    .catch((err)=>{
      console.log(err.response)
  
    })
  }

  const list = tripsList.map((x) => {
    return(
      <CardTrip key = {x.id}>
        <h2>{x.name}</h2>
        <h4>Data: {x.date}</h4>
        <button onClick={()=> deleteTrip(x.id)}>Deletar viagem</button>
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

