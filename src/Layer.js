import React, {Component} from 'react'

export default function Layer(InputComponent){
    return class Layered extends Component{
        render(){
            return (
    
                <div className="borderlayer">
                <InputComponent/>
                </div>
            )
        }
       
    }
}