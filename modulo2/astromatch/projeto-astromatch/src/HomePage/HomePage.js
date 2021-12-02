import axios from 'axios'
import {useState, useEffect} from 'react'



export default function HomePage() {
    const [id, setId] = useState('')
    const [idade, setIdade] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [bio, setBio] = useState('')
    
    useEffect(() => {
        getProfiles();
      }, [id]);

    const getProfiles = () => {
        axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:victor/person')
        .then((res) => {
            setIdade(res.data.profile.age)
            setNome(res.data.profile.name)
            setFoto(res.data.profile.photo)
            setBio(res.data.profile.bio)
            
        })
        .catch((err)=> {
            console.log("deu erro coisinha")
        })
        
    }

    return (
      <div>
        HomePage
      </div>
    )
  

}
    