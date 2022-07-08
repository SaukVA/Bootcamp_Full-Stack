
export const Filter = ({filter, setFilter}) =>{
    const save = (setter) =>{
        return (event)=>{ setter(event.target.value) }
    }

    return (
        <div>
            <p>filter shown with <input onChange={save(setFilter)} value={filter} /></p>
        </div>
    )
}