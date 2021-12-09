import React from 'react'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

function CreateTripPage() {
  const history = useHistory()
  return (
    <div>
        <h1>Crie Viagens aqui</h1>
        <button onClick = {() => history.push('/')}>Voltar para Home</button>
        <button onClick = {() => history.push('/admin/trips/list')}>Administrativo</button>
    </div>
  );
}

export default CreateTripPage;