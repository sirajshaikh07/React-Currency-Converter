import { useCallback, useEffect, useRef, useState } from "react"

export default function PasswordGen()
{

    let[password,setPassword]=useState("");
    let[length,setLength]=useState(8);
    let[numberAllowed,setNumberAllowed]=useState(false);
    let[characterAllowed,setCharacterAllowed]=useState(false);

    let generatePassword=useCallback(()=>
    {
        let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let genpassword=""
        if(numberAllowed)
        {
            char+="1234567890"
        }
        if(characterAllowed)
        {
            char+="!@#$%^&*()_+/*-~"
        }
        for(let i=0;i<length;i++)
        {
            let index=Math.floor(Math.random()*char.length)
             genpassword+=char.charAt(index)

        }
        setPassword(genpassword)
    },[length,numberAllowed,characterAllowed,setPassword])
    useEffect(()=>{
        generatePassword()
        

    },[length,numberAllowed,characterAllowed,generatePassword])
    



    // copy to clipboard
    let copyRef=useRef(null);

    let copyText=useCallback(()=>
    {
      copyRef.current?.select();
      
      window.navigator.clipboard.writeText(password)
    },[password])


    return(
        <>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-auto mt-10">

    <h1 className="justify-center text-center text-lg">Password Generator</h1>
    <div className="flex items-center space-x-2 mb-4">
        
      <input 
        type="text" 
        placeholder="Password" readOnly
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={password}
        ref={copyRef}
      />
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={copyText}>
        Copy
      </button>
    </div>

    
    <div className="flex items-center justify-between mb-4">
      <label className="font-semibold">Length: {length}</label>
      <input 
        type="range" 
        min="4" 
        max="100" 
        value={length}
        className="w-full ml-4" 
        onChange={(e)=>(setLength(e.target.value))}
        
      />
    </div>

    
    <div className="flex space-x-4 mb-4">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
        defaultChecked={numberAllowed} onChange={()=>
        {
            setNumberAllowed((check)=>!check)
        }}/> 
        <span>Numbers</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
        defaultChecked={characterAllowed}
        onChange={()=>
        {
            setCharacterAllowed((check)=>!check)
        }}
        />
        <span>Characters</span>
      </label>
    </div>

  </div>
        </>
    )

}