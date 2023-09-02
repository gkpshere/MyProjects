import React,{useRef,useState,useEffect} from 'react'
import Layer from './Layer';


function SimpleFun(props){
const inputRef=useRef(null);
const update=(e)=>{
    console.log("I am updating the input field in functional component with the following text " + e.target.value)
}

    
    return(
<>
            <h1>
                Gayathri's Functional Component
            </h1>
            <p className='my-header'>
                I am a simple functional based component
            </p>
            <input type="text" ref={inputRef}
                onChange={update} />
            {props.children}
        </>
    )
}

const SimpleFunLayered=Layer(SimpleFun)

export default SimpleFunLayered;