import {
    BoxBufferGeometry,
    DodecahedronGeometry,
    Vector2,
    Mesh,
    MeshBasicMaterial,
    MeshStandardMaterial,
    MathUtils,
    TextureLoader
} from 'three';

const image = require('../assets/img/img.png')

function createMaterial() {
    const textureLoader = new TextureLoader()
    const img = textureLoader.load(image)
    img.offset = new Vector2(.1, .1)
    return new MeshStandardMaterial({
        // color: 'blue',
        map: img
    });
}

function createCube() {
    // create a geometry
    const geometry = new DodecahedronGeometry();

    // create a default (white) Basic material
    const material = createMaterial()

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    const degrees = 100 * 1000 / 360
    const radiansPerSecond = MathUtils.degToRad(30);
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        // cube.rotation.z += radiansPerSecond * delta;
        // cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };
    return cube;
}

export { createCube };