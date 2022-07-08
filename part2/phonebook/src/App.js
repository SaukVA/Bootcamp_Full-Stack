import { useEffect, useState } from 'react'
import { Persons } from './Persons'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'
import { getData } from './services'

export const App = () => {
  const [ persons, setPersons ] = useState([ ])
  const [ filter, setFilter ] = useState('') 

  useEffect (()=>{
    getData().then( data =>{ setPersons(data.data) })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Add a new Person</h3>
      <PersonForm persons={[...persons]} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Persons persons={[...persons]} filter={filter} setPersons={setPersons}/>
    </div>
  )
}