import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Button = ({text, func}) =>{
  return(<button onClick={func}>{text}</button>);
}

const Statistics = ({good, neutral,bad}) => {
  const average = (good - bad)/(good + neutral + bad);
  const total = good*100/(good + neutral + bad)

  return(
    <table>
      <tbody>
        <Statistic text='Good' value={good}/>
        <Statistic text='Neutral' value={neutral}/>
        <Statistic text='Bad' value={bad}/>
        <Statistic text='All' value={good + neutral + bad}/>
        <Statistic text='Average' value={average} />
        <Statistic text='Total' value={total + '%'} />
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) =>{
  return(
    <tr>
      <td>{text} : </td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  const incrementState = (state, setState) => {
    return (() => setState(state + 1))
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' func={incrementState(good,setGood)}/>
      <Button text='Neutral' func={incrementState(neutral,setNeutral)}/>
      <Button text='Bad' func={incrementState(bad,setBad)}/>
      <h1>Statistics</h1>
      {(good === 0 && bad === 0 && neutral === 0) ? <p>No feedback</p> : <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);