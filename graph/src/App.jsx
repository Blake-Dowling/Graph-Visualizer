import { useState, useEffect, useRef } from 'react'

import './App.css'
import Vertex from './Vertex'
import Edge from './Edge'
import ListGraph from './ListGraph'

function App() {
  const [graph, setGraph] = useState(new ListGraph([[1, 2], [2, 3], [], [0, 2]]))
  const [vertexCenters, setVertexCenters] = useState([])

  useEffect(() => {
    let centers = new Array(graph?.n).fill({x: null, y: null})
    for(let i=0; i<graph?.V?.length; i++){
      const rect = document.getElementById(`vertex${i}Wrapper`)?.getBoundingClientRect()
      const center = {x: rect?.left+(rect?.width/2), y: rect?.top+(rect?.height/2)}
      centers[i] = center
    }
    setVertexCenters(centers)
  }, [graph])

  return (
    <div className="app">
      <div className="control-container">
        <button onMouseDown={()=>{setGraph(prevGraph=>{prevGraph.dfsVisit(); return new ListGraph(prevGraph)})}}>
          Detect Cycles
        </button>
      </div>
      <div 
        className="vertex-container"
      >
        {/******************** Draw Vertices ********************/}
        {graph.V.map((u, uIndex) => {
            // console.log(u, idx, graph.visited[idx])
            const angle = 2 * Math.PI * (uIndex / graph.n)
            return (
            <div id={`vertex${uIndex}Wrapper`}
                  style={{
                    position: "absolute",
                    // transform: `translate(${200 * Math.cos(angle)}px, ${200 * Math.sin(angle)}px)`
                    left: (window.innerWidth / 2) + 200 * Math.cos(angle),
                    top: (window.innerHeight / 2) + 200 * Math.sin(angle)
                  }}
            >
              <Vertex
              id={`vertex${uIndex}`}
              vertexId={uIndex}
              visited={graph.V[uIndex].visited}
              isCurrentVertex={graph.currentVertex?.index===uIndex}
              />
            </div>
            )
        })}
      </div>
      {/******************** Draw Edges ********************/}
      <svg className="edge-container" >
        {graph.V.map((u, uIndex) => {
          return <g>
            {graph.V[uIndex].nextVertices.map((v, vIndex) => {
                return <Edge
                  start={vertexCenters[uIndex]}
                  end={vertexCenters[v]}
                />
            })}
          </g>
        })}
      </svg>
    </div>
  )
}

export default App
