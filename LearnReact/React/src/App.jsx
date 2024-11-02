
import { useState } from 'react';
import Cards from './components/Cards';



function App() {

  let[color,setColor]=useState("black")
  return (
   
    <>
 <div className='h-screen w-screen flex flex-col justify-between' style={{ backgroundColor: color }}>
  <div className='max-w-screen-lg mx-auto'>
    
  </div>
  <div className="flex justify-center space-x-4 pb-8">
    <button onClick={()=>setColor("blue")} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Button 1</button>
    <button onClick={()=>setColor("green")} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">Button 2</button>
    <button onClick={()=>setColor("red")} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">Button 3</button>
    <button onClick={()=>setColor("yellow")} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700">Button 4</button>
    <button onClick={()=>setColor("purple")} className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">Button 5</button>
  </div>
</div>

  
   </>
  )
}

export default App;