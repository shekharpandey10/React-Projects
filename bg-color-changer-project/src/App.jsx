import { useState } from "react"

function App() {
const [color,setColor]=useState('olive')

  return (
    <div className="w-full h-screen"
    style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 bg-white rounded-xl">
        <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:'Green'}} onClick={()=>setColor('green')}>Green</button>
        <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:'Blue'}} onClick={()=>setColor('blue')}>Blue</button>
        <button className="outline-none px-4 py-1 rounded-full text-gray" style={{backgroundColor:'Yellow'}} onClick={()=>setColor('Yellow')}>Yellow</button>
        <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:'brown'}} onClick={()=>setColor('Brown')}>Brown</button>
        <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:'Black'}} onClick={()=>setColor('Black')}>Black</button>
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-2xl" style={{backgroundColor:'White'}} onClick={()=>setColor('White')}>White</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor:'Orange'}} onClick={()=>setColor('Orange')}>Orange</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor:'olive'}} onClick={()=>setColor('olive')}>olive</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor:'Gray'}} onClick={()=>setColor('Gray')}>Gray</button>
        <button className="outline-none px-4 py-1 rounded-full text-gray shadow-2xl" style={{backgroundColor:'Pink'}} onClick={()=>setColor('Pink')}>Pink</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor:'Purple'}} onClick={()=>setColor('Purple')}>Purple</button>
      </div>
    </div>
    </div>
  )
}

export default App
