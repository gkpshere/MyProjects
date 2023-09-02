import React, { Component } from 'react';
import Layer from './Layer'

class Simple extends Component {
    // Sample for createREf
    // constructor() {
    //      super()
    //     this.inputREf = React.createRef();

    //  }

    componentDidMount() {
        // if (this.inputREf.current) {
        //     this.inputREf.current.focus();
        // }
    }

    update(e) {
        console.log("I am updating the input field in class based component with the following text" + e.target.value)
    }
    render() {
        return (<>
            <h1>
                Gayathri Class Based Component
            </h1>
            <p className='my-header'>
                I am a simple Class based component
            </p>
            <input type="text" ref={this.inputREf}
                onChange={this.update.bind(this)} />
            {this.props.children}
        </>)
    }

}
Simple=Layer(Simple)

export default Simple;
