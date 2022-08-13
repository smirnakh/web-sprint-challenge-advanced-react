import React, { useState } from 'react'
import axios from 'axios'
// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
const [message, setMessage] = useState(initialMessage)
const [email, setEmail] = useState(initialEmail)
const [step, setStep] = useState(initialSteps)
const [index, setIndex] = useState(initialIndex)
const [x, setX] = useState(2)
const [y, setY] = useState(2)

function getXY() {
   
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  function getXYMessage() {

    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  function reset() {
    setMessage('')
    setStep(0)
    setEmail('')
    setX(2)
    setY(2)

    // Use this helper to reset all states to their initial values.
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  function move(evt) {
    const direction = evt.target.id ;

    if (x === 1 && direction === "left"){
      setMessage(`You can't go left`)
      return
    }
    if (x === 3 && direction === "right"){
      setMessage(`You can't go right`)
      return
    }
    if (y === 1 && direction === "up"){
      setMessage(`You can't go up`)
      return
    }
    if (y === 3 && direction === "down"){
      setMessage(`You can't go down`)
      return
    }
    setMessage('')
    setStep(step + 1)
    if (direction === "up"){
      setY(y - 1)
    }
    if (direction === "down"){
      setY(y + 1)
    } 
    if (direction === "right"){
      setX(x + 1)
    } 
    if (direction === "left"){
      setX(x - 1)
    } 
    
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    // You will need this to update the value of the input.
    setEmail(evt.target.value);
    console.log(evt.target.value)
  }

  function onSubmit(evt) {
    evt.preventDefault();
    
     axios.post(`http://localhost:9000/api/result`, { x, y, step, email } )
    .then(res => {
      setEmail('')
      setMessage(res.data.message)
      
    })
    .catch(err => {
      setMessage(err.response.data.message)
      setEmail('')
      
    });
    // Use a POST request to send a payload to the server.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({x}, {y})</h3>
        <h3 id="steps">You moved {step} {step === 1 ? 'time' : 'times'}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" onChange={onChange} value={email}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
