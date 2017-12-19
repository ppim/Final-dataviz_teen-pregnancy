const graphContainer = document.getElementById('graphContainer')
const graph = document.createElement('img')
let curImg = '10-14.svg'
let img = curImg

graph.className = 'graph-img animated fadeIn'

function createGraph() {
    graph.setAttribute('src', curImg)
    graphContainer.appendChild(graph)
}

createGraph()

window.onscroll = function() {
    const vh = window.innerHeight
    const startPos = vh
    const firstChangePos = startPos + vh
    const secondChangePos = firstChangePos + vh
    const scrollPos = window.scrollY
    
    img = curImg

    if(scrollPos <= firstChangePos) {
        curImg = '10-14.svg'
    } else if(scrollPos > firstChangePos && scrollPos < secondChangePos) {
        curImg = '15-17.svg'
    } else if(scrollPos >= secondChangePos) {
        curImg = '18-19.svg'
    } 

    if(img != curImg) {
        graphContainer.innerHTML = ''
        createGraph()
    }
}
