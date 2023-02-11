import React from 'react'
import { useState } from 'react'
import '../styles/Board.style.scss'

const board = () => {
let [square, setSquare]= useState(Array(9).fill(null))

function changestate( n:any ){
  console.log("amar")
  
    
}

  return (
    <div className='board'>
        <button onClick={()=> changestate(0)}>{square[0]}</button>
        <button onClick={()=> changestate(1)}>{square[1]}</button>
        <button onClick={()=> changestate(2)}>{square[2]}</button>
        <button onClick={()=> changestate(3)}>{square[3]}</button>
        <button onClick={()=> changestate(4)}>{square[4]}</button>
        <button onClick={()=> changestate(5)}>{square[5]}</button>
        <button onClick={()=> changestate(6)}>{square[6]}</button>
        <button onClick={()=> changestate(7)}>{square[7]}</button>
        <button onClick={()=> changestate(8)}>{square[8]}</button>
    </div>

  )
}

export default board