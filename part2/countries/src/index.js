import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Filter } from './Filter';
import { Countries } from './Countries';
import axios from 'axios'

const App = () =>{
  const [filter, setFilter] = useState('')
  const [countries, setCountries] =useState([])

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then( response => {
      setCountries(response.data)
    })
  },[])

  return(
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

