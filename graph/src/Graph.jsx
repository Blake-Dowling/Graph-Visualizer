//list, mat
//weighted, directed
//
class Vertex{
    constructor(index, nextVertices){
        this.index = index
        this.visited = false
        this.nextVertices = nextVertices
    }
}
export default class Graph{
    constructor(V){
        if(V instanceof Graph){
            this.listRepr = V.listRepr
            this.V = V.V
            this.n = V.n
            this.currentVertex = V.currentVertex
            this.vStack = V.vStack
        }
        else{
            this.listRepr = V
            this.reset()
        }

    }
    reset(){
        this.V = []
        for(let i=0; i<this.listRepr.length; i++){
            this.V.push(new Vertex(i, this.listRepr[i]))
        }
        this.n = this.V.length
        this.currentVertex = this.n ? this.V[0] : null
        this.vStack = []
    }
    dfsVisit(){
        if(!this.currentVertex){
            this.reset()
            return
        }
        this.currentVertex.visited = true
        for(let i=0; i<this.currentVertex.nextVertices.length; i++){
            if(!this.V[this.currentVertex.nextVertices[i]].visited){
                this.vStack.push(this.currentVertex)
                this.currentVertex = this.V[this.currentVertex.nextVertices[i]]
                return
            }       
        } 
        // Leaf
        this.currentVertex = this.vStack.pop()
    }
    detectCycles(startingVertex){
        this.visited = new Array(this.n).fill(false)
        let pre = new Array(this.n).fill(-1)
        let post = new Array(this.n).fill(-1)
        let time = 0
        function visit(vertexNumber){
            this.visited[vertexNumber] = true

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


