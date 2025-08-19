import './Edge.css'

export default function Edge(props) {
  return (
    <g>
      <polyline
          points={`${props.start?.x} ${props.start?.y} ${props.start?.x+((props.end?.x-props.start?.x)/2)} ${props.start?.y+((props.end?.y-props.start?.y)/2)} ${props.end?.x} ${props.end?.y}`}
          stroke="red"
          strokeWidth="2"
          markerMid="url(#arrow)"
      />
    </g>
  )
}
