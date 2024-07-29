import Decimal from "decimal.js"
import * as Babylon from "babylonjs"
import SphereRender from "./SphereRender"
import createGLScene from "./createGLScene"
import createGPUScene from "./createGPUScene"

export const WebGPUSphereMultiGen = (num:number,canvas: OffscreenCanvas) => {
    let results = 0
    createGPUScene(canvas).then(({engine,scene}) => {
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
