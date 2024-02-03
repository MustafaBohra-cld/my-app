import React,{useState} from 'react'

export default function Factorial() {
    const [text,settext]=useState("type the no:")
    const [dado,setdado]=useState("")
    
    const factorial=(n)=> { 
        if (n === 0) { 
            return 1;
        } 
        else { 
            return n*factorial(n-1); 
        } 
    } 
    const fac=()=>{
        let abs=document.querySelector(".eep")
        abs.innerHTML=factorial(dado)

    }
    
    
  return (
    <div>
        
        <h2>write the no to get the factorial</h2>
        <input type="number" className='eee' placeholder={text} value={dado} onChange={(event)=>{setdado(event.target.value)}}/>
        
        <p className="eep"></p>
        <button  onClick={fac} className='btn btn-primary'>factorial</button>
      
    </div>
  )
}
