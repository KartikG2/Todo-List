import { useState } from "react"

export default function LudoBoard(){
    let[Moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    let updateBlue =()=>{
        setMoves((prevValues)=>{
            return{...prevValues,blue:prevValues.blue+1}
        })
    }
    let updateYellow =()=>{
        setMoves((prevValues)=>{
            return{...prevValues,yellow:prevValues.yellow+1}
        })
    }
    let updateGreen =()=>{
        setMoves((prevValues)=>{
            return{...prevValues,green:prevValues.green+1}
        })
    }
    let updateRed =()=>{
        setMoves((prevValues)=>{
            return{...prevValues,red:prevValues.red+1}
        })
    }
    return(
        <div>
            <p>Game Begins!!</p>
            <div>
                <p>Blue moves = {Moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves ={Moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black" }} onClick={updateYellow}>+1</button>
                <p>Green moves ={Moves.green}</p>
                <button style={{backgroundColor:"green"}}  onClick={updateGreen}>+1</button>
                <p>Red moves ={Moves.red}</p>
                <button style={{backgroundColor:"red"}}  onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}