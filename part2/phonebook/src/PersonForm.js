import { useState } from 'react'
import { postData, updateData } from './services'

export const PersonForm = ({persons,setPersons}) =>{

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const actionForm = (event) => {
        event.preventDefault()
        const newPerson = { name: newName, number: newNumber}
        const person = persons.find((person) => {return person.name === newName})

        /* Si el usuario no existe se crea */
        if(!person){
            postData(newPerson)
            .then(response => {
                alert('Se ha añadido ' + newName + ' correctamente!')
                setPersons([...persons, response.data])
            })
            .catch(alert('Fallo al añadir ' + newName))
        }
        /* Si el usuario existe se pregunta si cambiamos el numero */
        else{
            if(window.confirm(newName + 'is already added to phonebook, replace the old number with new number?')){
                updateData(person.id, newPerson)
                .then(response =>{
                    const copy = persons.map(per => per.name === newName ? response.data : per)
                    setPersons(copy)
                })
                .catch(alert('Fallo al actualizar datos de ' + newName))
            }
        }
    }
    
    const save = (setter) =>{
        return (event)=>{ setter(event.target.value) }
    }

    return (
        <div>
            <form onSubmit={actionForm}>
                <div>name: <input value={newName} onChange={save(setNewName)}/></div>
                <div>number: <input type="telf" pattern="[0-9]{9}" value={newNumber} title="El numero de telofono debe contenes 9 cifras." onChange={save(setNewNumber)}/></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}