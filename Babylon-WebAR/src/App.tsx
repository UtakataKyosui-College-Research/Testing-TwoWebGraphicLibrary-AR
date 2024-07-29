import * as Babylon from "babylonjs"
import { useRef } from "react"
import createScene from "./createGLScene"
import SphereRender from "./SphereRender"
import Decimal from "decimal.js"

function App() {
  const ButtonRef = useRef<HTMLButtonElement | null>(null)
  // const [ar,setAr] = useState(false)
  const render_num = 50
  let results: number = 0

  function AsignAR(event: React.SyntheticEvent) {
    event.preventDefault()
    ButtonRef.current!.disabled = true
    
    createScene().then(({engine,scene}) => {
      for(let i = 0; i < render_num;i++){
        const time = SphereRender({scene,position: new Babylon.Vector3(2 + i,5,0)})
        results += time
      }
      engine.runRenderLoop(() => {
        scene.render()
      })
      console.log(`${render_num}個のスフィアをレンダリングする際、一個あたり`,new Decimal(`${results}`).div(`${render_num}`).toNumber(),"秒かかりました")
    })
  }
  
  return (
    <>
    <button onClick={AsignAR} ref={ButtonRef}>Enable</button>
    <main style={{
      gridTemplateColumns: "1fr 1fr"
    }}>
      <div>
        <canvas 
        style={{
          border: "1px solid black",
          borderRadius: "15px",
          width: "100%",
          height: "90vh",
          overflow: "hidden"
        }}
        id="webgl"
        >

        </canvas>
      </div>
      <div>
      <canvas 
        style={{
          border: "1px solid black",
          borderRadius: "15px",
          width: "100%",
          height: "90vh",
          overflow: "hidden"
        }}
        id="webgpu"
        >

        </canvas>
      </div>
    </main>
    
    </>
  )
}

export default App
