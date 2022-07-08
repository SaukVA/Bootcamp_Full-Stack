import axios from 'axios'

export const getData = () =>{
    const promise = axios.get('http://localhost:3001/persons')
    return promise
}

export const postData = (data) =>{
    const promise = axios.post('http://localhost:3001/persons', data)
    return promise
} 

export const deleteData = (id) =>{
    const promise = axios.delete('http://localhost:3001/persons/'+id)
    return promise
}

export const updateData = (id, data) =>{
    const promise = axios.put('http://localhost:3001/persons/' + id, data)
    return promise
} 