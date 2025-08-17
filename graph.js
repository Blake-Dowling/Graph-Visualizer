//list, mat
//weighted, directed
//
export class Graph{
    constructor(V){
        this.V = V
        this.n = V.length
    }
    detectCycles(startingVertex){
        let visited = new Array(this.n).fill(false)
        let pre = new Array(this.n).fill(-1)
        let post = new Array(this.n).fill(-1)
        let time = 0
        function visit(vertexNumber){
            visited[vertexNumber] = true

        }
        visit(startingVertex)
    }
    reachableVertices(startingVertex){
        let reachable = new Array(this.n).fill(false)
        const visit = (vertexNumber) => {
            reachable[vertexNumber] = true
            for(let i=0; i<this.V[vertexNumber].length; i++){
                visit(this.V[i])
            }
        }
        this.reachableVertices(startingVertex)
        return reachable
    }
}


