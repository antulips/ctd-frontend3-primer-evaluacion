import React, { Component } from "react";
import Story from "./components/Layout/Story/Story";

export default class App extends Component {
  render() {
    //contenido escalable, con posibilidad de renderizar navs, footer y demás elementos
    return (
      <div className="App">
        <Story />
      </div>
    );
  }
}
