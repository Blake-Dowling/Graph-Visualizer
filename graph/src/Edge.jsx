import React from 'react'
import './Edge.css'

export default function Edge(props) {
  return (
    <g>
      <line
          x1={props.start?.x}
          y1={props.start?.y}
          x2={props.end?.x}
          y2={props.end?.y}
          stroke="red"
          strokeWidth="2"
      />
    </g>
  )
}
