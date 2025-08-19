import React, { useState, useEffect } from 'react'
import './Vertex.css'

export default function Vertex(props) {
  const [backgroundColor, setBackgroundColor] = useState("white")
  useEffect(() => {
    let newBackgroundColor = props.isCurrentVertex ? "yellow" : props.visited ? "grey" : "white"
    setBackgroundColor(newBackgroundColor)
  }, [props.isCurrentVertex, props.visited, props.cur])
  

  return (
    <div 
      className="vertex" 
      style={{
        background: backgroundColor,
        gridRowStart: props.row,
        gridColumnStart: props.col
      }}
      >
        {props.vertexId}
        {props.visited}
    </div>
  )

}
