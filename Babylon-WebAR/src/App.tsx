import { useEffect, useRef } from "react"
import {  Remote } from "comlink"

function App() {
  const ButtonRef = useRef<HTMLButtonElement | null>(null)
  // const [ar,setAr] = useState(false)
  const render_num = 50

  const workerRef = useRef<Remote<typeof import("./worker")> | null>(null)

  useEffect(() => {
    workerRef.current = new ComlinkWorker<typeof import("./worker")>(
      new URL("./worker",import.meta.url),
      {
        type: "module",
      }
    )
    workerRef.current
  },[])

  async function AsignAR(event: React.SyntheticEvent) {
    event.preventDefault()
    ButtonRef.current!.disabled = true
    if(workerRef.current){
      await workerRef.current.WebGLSphereMultiGen(render_num,(document.getElementById("webgl") as HTMLCanvasElement).transferControlToOffscreen())
      await workerRef.current.WebGPUSphereMultiGen(render_num,(document.getElementById("webgpu") as HTMLCanvasElement).transferControlToOffscreen())
    } 
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
          width: "render_num%",
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
          width: "render_num%",
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
