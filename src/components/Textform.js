// import { useState } from "react"
import React , { useState }from 'react'

export default function Textform(props) {
  const clickhandlerup=()=>{
    // console.log("button clikced")
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showalert("converted to l uppercase",'success')
  }
  const clickhandlerlow=()=>{
    // console.log("button clikced")
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showalert("converted to lower case",'success')
  }
  const onchangehandler=(event)=>{
    console.log("change")
    setText(event.target.value)
  }
  const arraygiver=()=>{
    let nwtext=text.split(" ")
    props.showalert("array is given",'success')

    console.log(nwtext)
    for (let ind = 0; ind < nwtext.length; ind++) {
      // const element = array[ind];
      let b=document.querySelector(".item")
      b.innerHTML=b.innerHTML+ nwtext[ind]+ " "
      
    }
    
    setText(" ")
    
    

  }
  const [text, setText] = useState('enter the text')
  // let a=text.split(" ")
  
  // console.log(a)
  // setText="kiran"
  return (

    <div>
      <>
        <div className="container my-3"><div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==="dark" ? "grey":"white",color:props.mode==="dark" ? "white":"black"}} value={text} onChange={onchangehandler}   rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={clickhandlerup}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={clickhandlerlow}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={arraygiver}>array giver</button>
        </div>
        <div className="container my-2">
          <h1>your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p className="item">the text is : </p>
      
          
        </div>



      </>





    </div>
  )
}
