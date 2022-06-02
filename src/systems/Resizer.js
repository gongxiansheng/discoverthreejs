class Resizer {
    constructor(container, camera, renderer) {
      
        this.setSize(container, camera, renderer)
        window.addEventListener('resize', () => {
            this.setSize(container, camera, renderer)

            this.onResize()
        })
    }

    setSize(container, camera, renderer) {
        // Set the camera's aspect ratio
        camera.aspect = container.clientWidth / container.clientHeight;
        
        // update the size of the renderer AND the canvas
        renderer.setSize(container.clientWidth, container.clientHeight);
        
        // update the camera's frustum
        camera.updateProjectionMatrix();

        // set the pixel ratio (for mobile devices)
        renderer.setPixelRatio(window.devicePixelRatio);
    }

    onResize() {}
  }
  
  export { Resizer };
