/* import Decimal from "decimal.js" */
import * as Babylon from "babylonjs"
/* import SphereRender from "./SphereRender"
 */
export const WebGPUSphereMultiGen = async(/* num:number, */canvas: OffscreenCanvas) => {
    /* let results = 0 */
    /* const engine = new Babylon.WebGPUEngine(canvas)
    await engine.initAsync() */
    const engine = new Babylon.WebGPUEngine(canvas)
    const scene = new Babylon.Scene(engine);
    const camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(0, 5, -10), scene);
    camera.setTarget(Babylon.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    return {
        engine,
        scene
    }

    /* const xr =  *//* await scene.createDefaultXRExperienceAsync({
        uiOptions: {
            sessionMode: 'immersive-ar',
            
        }
    }) */
    /* for(let i = 0; i < num;i++){
        const time = SphereRender({scene,position: new Babylon.Vector3(2 + i,5,0)})
        results += time
    }
    engine.runRenderLoop(() => {
        scene.render()
    })
    console.log(`${num}個のスフィアをレンダリングする際、一個あたり`,new Decimal(`${results}`).div(`${num}`).toNumber(),"秒かかりました")    */
}



/* 
export const WebGLSphereMultiGen = (num:number,canvas: OffscreenCanvas) => {
    let results = 0
    createGLScene(canvas).then(({engine,scene}) => {
        for(let i = 0; i < num;i++){
            const time = SphereRender({scene,position: new Babylon.Vector3(2 + i,5,0)})
            results += time
        }
        engine.runRenderLoop(() => {
            scene.render()
          })
          console.log(`${num}個のスフィアをレンダリングする際、一個あたり`,new Decimal(`${results}`).div(`${num}`).toNumber(),"秒かかりました")
    })
}
 */