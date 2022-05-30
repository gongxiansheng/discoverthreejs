import World from './main'

const container = document.getElementById('scene-container')
const world = new World(container)


const button = document.getElementById('button')

button.addEventListener('click', () => {
    world.render()
})
