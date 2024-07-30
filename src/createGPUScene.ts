import * as Babylon from "babylonjs"
export default async function createGPUScene(canvas: OffscreenCanvas){
    const engine = new Babylon.WebGPUEngine(canvas)
    await engine.initAsync()

    const scene = new Babylon.Scene(engine);
    const camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(0, 5, -10), scene);
    camera.setTarget(Babylon.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    /* const xr =  */await scene.createDefaultXRExperienceAsync({
        uiOptions: {
            sessionMode: 'immersive-ar',
            
        }
    })
    return {engine,scene}
}