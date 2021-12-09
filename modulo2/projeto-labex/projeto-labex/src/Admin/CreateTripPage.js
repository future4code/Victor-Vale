import React from 'react'
import {useState, useEffect} from 'react'

function CreateTripPage(props) {

    return (
    <div>
        <h1>Crie Viagens aqui</h1>
        <button onClick = {() => props.changePage('Home')}>Voltar para Home</button>
        <button onClick = {() => props.changePage('Admin')}>Administrativo</button>
    </div>
  );
}

export default CreateTripPage;