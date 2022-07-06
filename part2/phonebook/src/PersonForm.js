import { useState } from 'react'

export const PersonForm = ({persons,setPersons}) =>{

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const exist = () =>{
        return persons.find((persons) => {return persons.name === newName})
    }

    const addPerson = (event) => {
        event.preventDefault()

        if(!exist()){
            const newPerson = { name: newName, number: newNumber}
            setPersons([...persons, newPerson])
        }
        else{
            alert(newName + 'is already added to phonebook')
        }
    }
    
    const save = (setter) =>{
        return (event)=>{ setter(event.target.value) }
    }

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>name: <input value={newName} onChange={save(setNewName)}/></div>
                <div>number: <input value={newNumber} onChange={save(setNewNumber)}/></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}