import axios from 'axios'
import { createHashHistory } from 'history'
import React from 'react'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const coordinates = [{x:1, y:1}, {x:2, y:1}, {x:3, y:1}, {x:1, y:2}, {x:2, y:2}, {x:3, y:2}, {x:1, y:3}, {x:2, y:3}, {x:3, y:3}]

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
}

export default class AppClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      steps: 0,
      index: initialIndex,
      email: initialEmail,
      message: ''
    }
  
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  }
  getXY = () => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  getXYMessage = (direction) => {
      const x = coordinates[this.state.index].x
      const y = coordinates[this.state.index].y
    if(x === 1  && direction === "left"){
    return this.setState({message: "You can't go left"})
  }
  if(x === 3 && direction === "right"){
  return this.setState({message: "You can't go right"})
  }
  if(y === 3 && direction === "down"){
    return this.setState({message: "You can't go down"})
  }
  if(y === 1 && direction === "up"){
    return this.setState({message: "You can't go up"})
  } 
  return this.setState({message: ""})
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  reset = () => {
    this.setState(initialState)
    // this.setState({steps: 0, index: initialIndex})
    // Use this helper to reset all states to their initial values.
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  move = (evt) => {
    console.log(evt.target.id)
    
    const direction = evt.target.id
    
    this.getXYMessage(direction)
     
    if(this.state.index === 0 && direction === "right"){
      this.setState({steps: this.state.steps + 1})
      return this.setState({index: 1})
      
    }else if (this.state.index === 0 && direction === "down"){
      this.setState({steps: this.state.steps + 1})
      return this.setState({index: 3})
    
    }else if (this.state.index === 1 && direction === "right"){
      this.setState({steps: this.state.steps + 1})
      return this.setState({index: 2})
    
    }else if (this.state.index === 1 && direction === "down"){
      this.setState({steps: this.state.steps + 1})
      return this.setState({index: 4})
    
    }else if (this.state.index === 1 && direction === "left"){
      this.setState({steps: this.state.steps + 1}) 
      return this.setState({index: 0})

    }else if (this.state.index === 2 && direction === "left"){
      this.setState({steps: this.state.steps + 1})    
      return this.setState({index: 1})

    }else if (this.state.index === 2 && direction === "down"){
      this.setState({steps: this.state.steps + 1})    
      return this.setState({index: 5})

    }else if (this.state.index === 3 && direction === "up"){
      this.setState({steps: this.state.steps + 1})   
      return this.setState({index: 0})

    }else if (this.state.index === 3 && direction === "right"){
      this.setState({steps: this.state.steps + 1})    
      return this.setState({index: 4})

    }else if (this.state.index === 3 && direction === "down"){
      this.setState({steps: this.state.steps + 1})    
      return this.setState({index: 6})

    }else if (this.state.index === 4 && direction === "up"){
      this.setState({steps: this.state.steps + 1})    
      return this.setState({index: 1})

    }else if (this.state.index === 4 && direction === "right"){
      this.setState({steps: this.state.steps + 1})   
      return this.setState({index: 5})

    }else if (this.state.index === 4 && direction === "left"){
      this.setState({steps: this.state.steps + 1})   
      return this.setState({index: 3})

     }else if (this.state.index === 5 && direction === "down"){
      this.setState({steps: this.state.steps + 1})    
      return this.setState({index: 8})

     }else if (this.state.index === 5 && direction === "up"){
      this.setState({steps: this.state.steps + 1})      
      return this.setState({index: 2})

     }else if (this.state.index === 5 && direction === "left"){
      this.setState({steps: this.state.steps + 1})     
      return this.setState({index: 4})

     }else if (this.state.index === 6 && direction === "up"){
      this.setState({steps: this.state.steps + 1})        
      return this.setState({index: 3})

     }else if (this.state.index === 6 && direction === "right"){
      this.setState({steps: this.state.steps + 1})       
      return this.setState({index: 7})

    }else if (this.state.index === 4 && direction === "down"){
      this.setState({steps: this.state.steps + 1}) 
      return this.setState({index: 7})
  
    }else if (this.state.index === 7 && direction === "up"){
      this.setState({steps: this.state.steps + 1}) 
      return this.setState({index: 4})
      
    }else if (this.state.index === 7 && direction === "left"){
      this.setState({steps: this.state.steps + 1})  
      return this.setState({index: 6})
    
    }else if (this.state.index === 7 && direction === "right"){
      this.setState({steps: this.state.steps + 1})
      return this.setState({index: 8})
   
    }else if (this.state.index === 8 && direction === "up"){
      this.setState({steps: this.state.steps + 1})
      return this.setState({index: 5})
    
    }else if (this.state.index === 8 && direction === "left"){
      this.setState({steps: this.state.steps + 1})
      return this.setState({index: 7})

    }  
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  onChange = (evt) => {
    console.log (evt.target.value)
    this.setState({email: evt.target.value})
    // You will need this to update the value of the input.
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    axios.post(`http://localhost:9000/api/result`, { 
      "x": coordinates[this.state.index].x,
      "y": coordinates[this.state.index].y,
      "steps": this.state.steps, 
      "email": this.state.email 
    })
      .then(res => this.setState({message: res.data.message, email:''}))
      .catch(err => this.setState({message: err.response.data.message, email: ''}))
    // Use a POST request to send a payload to the server.
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({coordinates[this.state.index].x}, {coordinates[this.state.index].y})</h3>
          <h3 id="steps">You moved {this.state.steps} {this.state.steps === 1 ? 'time' : 'times'}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
                {idx === this.state.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.move}>LEFT</button>
          <button id="up" onClick={this.move}>UP</button>
          <button id="right" onClick={this.move}>RIGHT</button>
          <button id="down" onClick={this.move}>DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input id="email" type="email" placeholder="type email" onChange={this.onChange} value={this.state.email}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
