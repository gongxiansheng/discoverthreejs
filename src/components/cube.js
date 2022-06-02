import { 
    BoxBufferGeometry, 
    Mesh, 
    MeshBasicMaterial, 
    MeshStandardMaterial,
    MathUtils
} from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 'purple' });

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
