
const Person = ({name, number}) =>{
    return (<li>{name} : {number}</li>)
}
  
export const Persons = ({persons, filter}) =>{
    return(
        <ul>
            {persons
            .filter(p => p.name.includes(filter))
            .map((person) => <Person key={person.name} {...person}/>)}
        </ul>
    )
}