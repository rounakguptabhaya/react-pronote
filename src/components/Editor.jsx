import React from "react";

function Editor() {
    return (
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
    );

}

export default Editor;