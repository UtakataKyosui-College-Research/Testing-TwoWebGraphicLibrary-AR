import * as Babylon from "babylonjs"
export default function SphereRender({scene,position}:{scene: Babylon.Scene,position: Babylon.Vector3}){
    const start = performance.now()
    const sphere = Babylon.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position = position
    // console.log("Process Time: ",ResultTime,"秒かかりました")
   return (performance.now() - start)/1000
}