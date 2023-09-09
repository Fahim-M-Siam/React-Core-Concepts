/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
// import Users from './Users'
import Friends from './Friends'

function App() {
function handleClick(){
  alert('First button Clicked')
}

const handleClick2 = () =>{
  alert('Second button clicked')
}

const addToFive = (num) => {
  alert(num + 5);
}

  return (
    <>
      <h3>Core Concepts of React</h3>

      <Friends></Friends>

      {/* <Users></Users> */}

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() => {alert('Button3 Clicked')}}>Third button</button>
      <button onClick={() => addToFive(3)}>Fourth button</button>
    </>
  )
}

export default App
