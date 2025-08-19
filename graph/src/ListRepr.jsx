import React, { useState, useEffect } from 'react'

export default function ListRepr(props) {
    const [inputString, setInputString] = useState("")
    useEffect(() => {
        setInputString(JSON.stringify(props.listRepr))
    }, [props.listRepr])
    function updateListRepr(){
        try{
            props.setListRepr(JSON.parse(inputString))
        } catch(e){
            console.error(e)
        }
    }
  return (
    <div>
        Define Adjacency List:
      <input
        type="text"
        value={inputString}
        onChange={event=>{setInputString(event.target.value)}}
      />
      <button
        onClick={() => updateListRepr()}
      >
        Update Graph
      </button>
    </div>
  )
}
