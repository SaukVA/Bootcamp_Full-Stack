
const Countrie = ({countrie}) =>{
    return (
        <div>
            <h1>{countrie.name.common}</h1>
            <p>Capital: {countrie.capital}</p>
            <p>Population: {countrie.population}</p>
            <h2>Languajes</h2>
            <ul>
                {Object.values(countrie.languages).map((language) => <li key={language}>{language}</li>)}
            </ul>
            <img src={countrie.flags.png} alt="hola buenas"/>
        </div>
    )
}


export const Countries = ({ countries, filter, setFilter }) =>{

    let filteredCountries = countries.filter((countrie)=> countrie.name.common.includes(filter))

    const showCountrie = (countrieName) =>{
        return ()=>{
            setFilter(countrieName)
        }
    }
    
    return(
        <div>
            {filteredCountries.length > 10 ? <p>To Many Matches, specify another filter</p> : ''}
            { 
                (filteredCountries.length <= 10 && filteredCountries.length > 1) ?
                filteredCountries.map((countrie) => {
                    return(
                        <p key={countrie.name.common}>
                            {countrie.name.common}
                            <button onClick={showCountrie(countrie.name.common)}>Show Now</button>
                        </p>
                    )
                }) :
                ''
            }
            {
                filteredCountries.length === 1 ? <Countrie countrie={filteredCountries[0]} /> : ''
            }
        </div>
    )
}