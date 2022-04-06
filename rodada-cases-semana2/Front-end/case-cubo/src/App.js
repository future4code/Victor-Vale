import './App.css';
import axios from 'axios'
import { useForm } from './hooks/UseForm';
import { useEffect, useState } from 'react';
import {Chart} from 'react-google-charts'
import _ from 'lodash'

const App = () => {
  const {form, onChange, clearInputs} = useForm({firstName: '', lastName: '', participation: ''})
  const [condition, setCondition] = useState(true)
  const [list, setList] = useState()
  const [chartData, setChartData] = useState([])


  const onSubmitRegister = (event) => {
      event.preventDefault()
      console.log(form)
      requestRegister()
      
  }

  useEffect (() => {
    axios.get("https://cubo-back-end-labenu.herokuapp.com/users")
    .then((res) => {
      console.log(res.data.allUsers)
      setList(res.data.allUsers)
      setChartData(loadData(list))
      setCondition(true)
    })
    .catch((error) => {
      console.log(error.response)
    })
    
  }, [condition])

  const requestRegister = () => {
    const url = "https://cubo-back-end-labenu.herokuapp.com/user/register"
    axios.post(url, form)
    .then((res) => {
      console.log(res)
      setCondition(false)
    })
    .catch((error) => {
      console.log(error.response)
    })
    clearInputs()
  }

  const loadData = (data) => {
    const values = _.groupBy(data, (value) => {
      return value.firstName
    })
    console.log('values', values)
    const result = _.map(values, (value, key) => {
      return [key, _.sumBy(values[key], (v) => v.participation)]
    })
    console.log('result', result)
    return [["firstName", "participation"], ...result]
      
  }

  


  return (
    <div>
      <header>
        <form onSubmit={onSubmitRegister} >
            <input
                type= 'firstName'
                name='firstName'
                value={form.firstName}
                placeholder='First name'
                onChange={onChange}
            
            />
            <input
                name='lastName'
                value={form.lastName}
                placeholder='Last name'
                onChange={onChange}
            />

            <input
                name='participation'
                value={form.participation}
                placeholder='participation'
                onChange={onChange}
                
            />
            
            <button
                type={'submit'}
                margin={'normal'}
            >
            Send
            </button>
        </form>
      </header>
      <div className='containerData'>
        <h1>Data</h1>
        <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</h2>
      </div>
      <div className='tableAndChart'>
        <div className='containerTable'>
        <tr>
          <th></th>
          <th className="row-name">First Name</th>
          <th className="row-name">Last Name</th>
          <th className="row-participation">Participation</th>
        </tr>
        {
           list && list.map((user, index) => {
              return <tr key={user.id}>
                  <td className="row-number">{index + 1}</td>
                  <td className="row-name">{user.firstName}</td>
                  <td className="row-name">{user.lastName}</td>
                  <td className="row-participation">{user.participation}</td>
                </tr>
            })
        }
          </div>
      <Chart
        chartType='PieChart'
        data={chartData}
        width={"60%"}
        height={"90%"}
      />
      </div>

    
    </div>
    
  );
}

export default App;
