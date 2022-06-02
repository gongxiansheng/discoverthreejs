import { DirectionalLight } from "three";

function createLights() {
    const light = new DirectionalLight(0xffffff, 5)
    // move the light right, up, and towards us
    light.position.set(10, 10, 10);
    light.tick = (delta) => {
        // increase the light's rotation each frame
        // light.rotation.z += radiansPerSecond * delta;
        // light.rotation.x += radiansPerSecond * delta;
        light.position.y += delta;
    };
    return light
}

export { createLights }
