import React from 'react'
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


function TripDetailPage(props) {
  const history = useHistory()
  const params = useParams()
  console.log('Aqui é os params', params)
  

  useEffect(()=> {
    const token = localStorage.getItem('token')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trip/${params.id}`
    const headers = {
      headers: {
        auth: token
      }
    }
    axios.get(url, headers)
    .then((res)=>{
      console.log('página detalhes deu bom', res)
    })
    .catch((err)=>{
      console.log('página detalhes deu ruim ==>', err.response.data)
    })

  },[])


  return (
    <div>
        <h1>Detalhes da viagem</h1>
        <button onClick = {() => history.push('/')}>Voltar para Home</button>
        <button onClick = {() => history.push('/admin/trips/list')}>Administrativo</button>
    </div>
  );
  
}

export default TripDetailPage;