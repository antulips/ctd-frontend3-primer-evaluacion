//intenté hacerlo como componente funcional con Hooks pero no lo logré, dejo abajo comentado el código que no me salió
//import React from 'react';

import React, { Component } from "react";

export default class Options extends Component {
  render() {
    return (
      <div className={"opciones " + (this.props.hide ? "hidden" : "")}>
        <div className="opcion">
          <button
            id="A"
            className="botones"
            onClick={() => {
              this.props.handleOptions("A");
            }}
          >
            A
          </button>
          <h2>{this.props.options.a}</h2>
        </div>
        <div className="opcion">
          <button
            id="B"
            className="botones"
            onClick={() => {
              this.props.handleOptions("B");
            }}
          >
            B
          </button>
          <h2>{this.props.options.b}</h2>
        </div>
      </div>
    );
  }
}

/* export default function Options(props){
  //Alternativas de desestructuración:
  //const options = {...props.options};
  const{a: optionA, b: optionB} = props.options;
  
  //Hooks porque necesito recurrir al ciclo de vida
  //const [optionA, setOptionA] = useState("");
  //const [optionB, setOptionB] = useState("");
  
  //const [lastSelection, setLastSelection]= useState("");

  const handleOptions = props.handleOptions;

 useEffect(   
      setOptionA(props.options.a),      
      setOptionB(props.options.b) 
    ) 

  return (   
        <div className="opciones">
          <div className="opcion">
            <button id="A" className="botones" onClick={() => { handleOptions("A") }}>A</button>
            <h2>{optionA}</h2>
          </div>
          <div className="opcion">
            <button id="B" className="botones" onClick={() => { handleOptions("B") }}>B</button>
            <h2>{optionB}</h2>
          </div>
        </div>
    )
}
 */
