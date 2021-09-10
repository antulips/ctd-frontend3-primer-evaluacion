import React, { Component } from "react";
import data from "../../data.json";
import Logbook from "../Logbook/Logbook";
import Options from "../Options/Options";

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      id: null,
      nextId: null,
      currentFragment: {},
      currentOptions: {},
      previousSelection: "",
      userStory: [],
      hide: false
    };
    this.handleOptions = this.handleOptions.bind(this);
  }

  //ciclo de vida>no llegué a investigar alternativas u otros métodos
  componentDidMount() {
    this.setState({
      id: data.filter(
        (storyFragment) => storyFragment.id == this.state.counter
      )[0].id,
      currentFragment: data.filter(
        (storyFragment) => storyFragment.id == this.state.counter
      )[0],
      currentOptions: data.filter(
        (storyFragment) => storyFragment.id == this.state.counter
      )[0].opciones
    });
  }

  //función para setear estado a partir de estado previo
  nextId = (letter) => {
    this.setState((state) => {
      return {
        id: state.counter + 1 + letter,
        nextId: state.counter + 1 + letter
      };
    });
  };

  //incrementar contador
  incrementCounter = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
  };

  //handler de opciones que actualiza el estado
  handleOptions = (selected) => {
    selected === "A" ? this.nextId("a") : this.nextId("b");
    if (this.state.counter === 5) {
      this.setState((state) => {
        return {
          counter: 1,
          id: 1,
          hide: true
        };
      });
    } else {
      const nextId = this.state.counter + 1 + selected.toLowerCase();

      this.setState({
        currentOptions: data.filter(
          (storyFragment) => storyFragment.id == nextId
        )[0].opciones,
        previousSelection: selected,
        userStory: [...this.state.userStory, selected]
      });
      this.incrementCounter();
    }
  };

  render() {
    const fragment =
      this.state.id == this.state.currentFragment.id
        ? this.state.currentFragment
        : data.filter((storyFragment) => storyFragment.id == this.state.id)[0];

    return (
      <div className="layout">
        {this.state.counter == 5 ? (
          <h1 className="historia ">THE END ¡GRACIAS POR JUGAR!</h1>
        ) : null}
        <h1 className={"historia " + (this.state.hide ? "hidden" : "")}>
          {fragment.historia}
        </h1>
        <Options
          handleOptions={this.handleOptions}
          options={this.state.currentOptions}
          hide={this.state.hide}
        />
        <Logbook
          previousSelection={this.state.previousSelection}
          userStory={this.state.userStory}
          hide={this.state.hide}
        />
      </div>
    );
  }
}
