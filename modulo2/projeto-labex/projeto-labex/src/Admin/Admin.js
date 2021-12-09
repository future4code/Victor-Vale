import React from 'react'
import {useState, useEffect} from 'react'

function Admin(props) {

    return (
    <div>
        <h1>Administrativo</h1>
        <button onClick = {() => props.changePage('Home')}>Voltar para Home</button>
        <button onClick = {() => props.changePage('TripDetailPage')}>Ver Detalhes das viagens</button>
        <button onClick = {() => props.changePage('CreateTripPage')}>Criar viagens</button>
    </div>
  );
}

export default Admin;