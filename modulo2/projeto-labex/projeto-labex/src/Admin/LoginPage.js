import React from 'react'
import {useState, useEffect} from 'react'

function LoginPage(props) {

    return (
    <div>
        <h1>login Administrativo</h1>
        <button onClick = {() => props.changePage('Home')}>Voltar para Home</button>
        <button onClick = {() => props.changePage('Admin')}>Home ADM</button>
    </div>
  );
}

export default LoginPage;