import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/light.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js'
import { createControls } from './systems/control.js';

let camera;
let renderer;
let scene;
let loop;
export default class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer(container);
        container.append(renderer.domElement);
        loop = new Loop(camera, scene, renderer)

        const cube = createCube();
        // cube.rotation.set(-0.5, -0.1, 0.8);
        cube.position.set(-1, 0, 0);
        // cube.scale.x = -0.5

        const cube2 = createCube();
        cube2.position.set(-5, 0, 0);
        cube2.scale.x = 1;
        // loop.updatables.push(cube)

        const controls = createControls(camera, renderer.domElement);
        controls.target.copy(cube.position);
        controls.enableDamping = true;

        loop.updatables.push(controls)
        const light = createLights();
        scene.add(cube, light);
        // cube.add(cube2)

        const resizer = new Resizer(container, camera, renderer)
        resizer.onResize = () => {
            this.render()
        }
    }

    render() {
        renderer.render(scene, camera)
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}