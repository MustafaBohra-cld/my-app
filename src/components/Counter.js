import React , {useState} from 'react'

export default function Counter() {
    // const [val,setval]=useState(0)
    const [sty,setsty]=useState( {    })
    const adder=()=>{
        let abs=document.querySelector(".value")
        let p=abs.innerHTML
        let ra=parseInt(p)
        let value= ra+1

        abs.innerHTML=value
        setsty(        {backgroundColor:'black'})
        
    
    }
    const subs=()=>{
        let abs=document.querySelector(".value")
        let p=abs.innerHTML
        let ra=parseInt(p)
        let value= ra -1

        abs.innerHTML=value
    }
    const clear=()=>{
        let abs=document.querySelector(".value")
        let value=0

       
         

        abs.innerHTML=value


    }
    
    


  return (
    <div>
        <h2>COUNTER</h2>

        <p className="value">0</p>
        <button onClick={adder} style={sty} className="btn btn-primary">+</button>
        <button onClick={subs} className="btn btn-primary">-</button>
        <button onClick={clear} className="btn btn-primary">clear</button>
        
      
    </div>
  )
}
