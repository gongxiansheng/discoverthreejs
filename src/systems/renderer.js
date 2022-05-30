import { WebGLRenderer } from 'three';

function createRenderer(container) {
    const renderer = new WebGLRenderer();
    
    // turn on the physically correct lighting model
    renderer.physicallyCorrectLights = true;
    
    return renderer;
}

export { createRenderer };
