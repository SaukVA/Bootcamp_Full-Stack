import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const INICIAL_VALUE_POINTS = [0, 0, 0, 0, 0, 0]

const Section = ({title, selected, points}) =>{
  return(
    <div>
      <h1>{title}</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {points[selected]}</p>
    </div>
  )
}

const Button = ({text, action}) =>{
  return (<button onClick={action}>{text}</button>)
}

const App = ({anecdotes}) =>{
  const [selected, setSelected] = useState(0)
  const [max, setMax] = useState(0)
  const [points, setPoints] = useState(INICIAL_VALUE_POINTS)

  const nextAnecdote = () =>{
    let randomNumber = Math.floor(Math.random() * (anecdotes.length))
    setSelected(randomNumber)
  }

  const voteAnecdote = () =>{
    let copy = [...points]
    copy[selected] += 1
    setMax(copy.indexOf(Math.max(...copy)))
    setPoints(copy)
  }

  return(
    <div>
      <Section title="Anecdote of the day" selected={selected} points={points}/>
      <Button text='Next Anecdote!' action={nextAnecdote} />
      <Button text="Vote" action={voteAnecdote}/>
      <Section title="Anecdote With Most Votes" selected={max} points={points}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
