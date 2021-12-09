import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function Form(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [application, setApplication] = useState('')
  const [profession, setProfession] = useState('')
  const [country, setCountry] = useState('')
  console.log('Esse é Id passado', props.tripId)
  const history = useHistory()
  const params = useParams()
  console.log(params)
  
  const applyForm = () => {
     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trips/${params.id}/apply`
     const body = {
       name: name,
       age: age,
       applicationText: application,
       profession: profession,
       country: country 
     }
     const headers = {
       headers:{
         ContentType: 'application/json'
       }
     }

    axios.post(url, body, headers)
    .then((res)=>{
      console.log(res)
      alert('Aplicação registrada com sucesso')
        
    })
    .catch((err)=>{
      console.log(err.response.data)
        
    })
    setName('')
    setAge('')
    setApplication('')
    setProfession('')
    setCountry('')
}

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleAge = (event) => {
    setAge(event.target.value)
  }
  const handleApplication = (event) => {
    setApplication(event.target.value)
  }
  const handleProfession = (event) => {
    setProfession(event.target.value)
  }
  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  
  return (
    <div>
      <h1>Formulário</h1>
      <button onClick = {()=> history.push('/')}>Voltar para Home</button>
      <div>
        <input placeholder = 'Nome' value={name} onChange ={handleName} ></input>
        <input placeholder = 'Idade' value={age} onChange ={handleAge} ></input>
        <input placeholder = 'Texto de aplicação' value={application} onChange ={handleApplication} ></input>
        <input placeholder = 'Profissão' value={profession} onChange ={handleProfession} ></input>
        <input placeholder = 'País' value={country} onChange ={handleCountry} ></input>
        <button onClick = {applyForm}>Se inscrever</button>
      </div>
      
    </div>
  );
}

export default Form;
