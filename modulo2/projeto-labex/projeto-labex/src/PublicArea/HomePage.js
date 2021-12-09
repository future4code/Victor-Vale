import React from 'react'
import { useHistory } from "react-router-dom"

function HomePage() {
  const history = useHistory()



  return (
    <div>
      <h1>HomePage</h1>
      <button onClick = {()=> history.push("/travels")}>Ir para viagens</button>
      <button onClick = {()=> history.push("/login")}>Login Administrativo</button>
    </div>
  );
}

export default HomePage;
