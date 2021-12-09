import React from 'react'
import {useState, useEffect} from 'react'

function TripDetailPage(props) {

    return (
    <div>
        <h1>Detalhes da viagem</h1>
        <button onClick = {() => props.changePage('Home')}>Voltar para Home</button>
        <button onClick = {() => props.changePage('Admin')}>Administrativo</button>
    </div>
  );
}

export default TripDetailPage;