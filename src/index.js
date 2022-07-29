import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Editor from './components/Editor';

class Display extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: ''
        }

    }

    render(){
        return <>
            {/* <Editor /> */}
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={(event)=>this.setState({value: event.target.value})}     />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">
                      <textarea className='output' value={this.state.value} disabled></textarea>
                   </div>
                </div>                
            </div>
        </>
        


    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Display/>
);