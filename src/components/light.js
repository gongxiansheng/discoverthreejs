import { DirectionalLight, AmbientLight, HemisphereLight } from "three";

function createLights() {
    // const ambientLight = new AmbientLight(0xffffff, 2)
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        5, // intensity
    );

    const mainLight = new DirectionalLight(0xffffff, 5)
        // move the light right, up, and towards us
    mainLight.position.set(10, 10, 10);
    mainLight.tick = (delta) => {
        // increase the light's rotation each frame
        // light.rotation.z += radiansPerSecond * delta;
        // light.rotation.x += radiansPerSecond * delta;
        mainLight.position.y += delta;
    };
    return { mainLight, ambientLight }
}

export { createLights }