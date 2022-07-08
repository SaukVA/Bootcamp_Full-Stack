import { deleteData } from "./services"

const Person = ({name, number, fun}) =>{
    return (<li>{name} : {number} <button onClick={fun}>Delete</button></li>)
}
  
export const Persons = ({persons, filter, setPersons}) =>{
    const deletePerson = (person) =>{
        return () =>{
            if(window.confirm("Delete " + person.name + "?")){
                deleteData(person.id)
                .then(() =>{
                    const newPersons = persons.filter(el => el.name !== person.name)
                    setPersons(newPersons)
                })
                .catch(error => alert('No se ha podido eliminar a ' + person.name))
            }
        }
    }
    return(
        <ul>
            {persons
            .filter(p => p.name.includes(filter))
            .map((person) => <Person key={person.name} name={person.name} number={person.number} fun={deletePerson(person)}/>)}
        </ul>
    )
}