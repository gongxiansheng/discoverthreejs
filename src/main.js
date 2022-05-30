import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';


let camera;
let renderer;
let scene;
export default class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer(container);
        container.append(renderer.domElement);
        const cube = createCube();
        scene.add(cube)
        // this.render()

        this.resize(container)
    }

    resize(container) {
        new Resizer(container, camera, renderer)
    }
    render() {
        renderer.render(scene, camera)
    } 
}

