import React from 'react'
import './Vertex.css'

export default function Vertex(props) {
    let backgroundColor = props.visited ? "grey" : "white"

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
