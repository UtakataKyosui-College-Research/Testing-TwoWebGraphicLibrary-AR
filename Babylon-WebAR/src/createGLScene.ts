import * as Babylon from "babylonjs"
export default async function createGLScene(){
    const canvas = document.getElementById("webgl") as HTMLCanvasElement
    const engine = new Babylon.Engine(canvas)

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
    return {engine,scene}
  }