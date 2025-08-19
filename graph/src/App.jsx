import { useState, useEffect, useRef } from 'react'

import './App.css'
import Vertex from './Vertex'
import Edge from './Edge'
import ListGraph from './ListGraph'
import ListRepr from './ListRepr'

function App() {
  const [graph, setGraph] = useState(new ListGraph([[]]))
  const [vertexCenters, setVertexCenters] = useState([])
  const [listRepr, setListRepr] = useState([[1, 2], [2, 3], [], [0, 2], []])
  useEffect(() => {
    setGraph(new ListGraph(listRepr))
  }, [listRepr])
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
        <ListRepr
          listRepr={listRepr}
          setListRepr={setListRepr}
        />
        <button onMouseDown={()=>{setGraph(prevGraph=>{prevGraph.dfsVisit(); return new ListGraph(prevGraph)})}}>
          DFS
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
                    left: (window.innerWidth / 2) + 200 * Math.cos(angle),
                    top: (window.innerHeight / 2) + 200 * Math.sin(angle)
                  }}
            >
              <Vertex
              id={`vertex${uIndex}`}
              vertexId={uIndex}
              visited={graph.V[uIndex].visited}
              completed={graph.V[uIndex].completed}
              isCurrentVertex={graph.currentVertex?.index===uIndex}
              />
            </div>
            )
        })}
      </div>
      {/******************** Draw Edges ********************/}
      <svg className="edge-container" >
        <defs>
          {/* Arrowhead definition */}
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="red" />
          </marker>
        </defs>
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
