import * as Babylon from "babylonjs"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    async function createScene(){
      const canvas = document.getElementById("Babylon") as HTMLCanvasElement
      const engine = new Babylon.WebGPUEngine(canvas)
      await engine.initAsync()

      const scene = new Babylon.Scene(engine);
      const camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(0, 5, -10), scene);
      camera.setTarget(Babylon.Vector3.Zero());
      camera.attachControl(canvas, true);

      const light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene);
      light.intensity = 0.7;
      const sphere = Babylon.Mesh.CreateSphere("sphere1", 16, 2, scene);
      sphere.position.y = 2;
      sphere.position.z = 5;
  
      /* const xr =  */await scene.createDefaultXRExperienceAsync({
          uiOptions: {
              sessionMode: 'immersive-ar',
              
          }
      });
      engine.runRenderLoop(() => {
        scene.render()
      })
    }
    createScene()
  },[])
  
  return (
    <canvas 
      style={{
        border: "1px solid black",
        borderRadius: "15px",
        width: "100%",
        height: "90vh",
        overflow: "hidden"
      }}
      id="Babylon"
      >

    </canvas>
  )
}

export default App
