import React, { Component } from "react";
import data from "../../data.json";
import Options from "../Options/Options";
import Logbook from "../Logbook/Logbook";

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
      userStory: []
    };
    this.handleOptions = this.handleOptions.bind(this);
  }

  //ciclo de vida>investigué alternativas u otros métodos pero no tuve tiempo suficiente para aprender a implementarlos
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

  //función para setear estado a partir de estado previo, según sugiere la documentación
  nextId = (letter) => {
    this.setState((state) => {
      return {
        id: this.state.counter + 1 + letter,
        nextId: this.state.counter + 1 + letter
      };
    });
  };

  //incrementar contador (ídem)
  incrementCounter = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
  };

  //handler de opciones que actualiza el y dispara el renderizado
  handleOptions = (selected) => {
    selected === "A" ? this.nextId("a") : this.nextId("b");
    //La primer parte del if es código para próximas iteraciones con un botón de reinicio
    if (this.state.counter === 5) {
      this.setState((state) => {
        return {
          counter: 1,
          id: 1
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
    //para evitar inconsistencias de renderizado/actualización
    const fragment =
      this.state.id == this.state.currentFragment.id
        ? this.state.currentFragment
        : data.filter((storyFragment) => storyFragment.id == this.state.id)[0];

    return (
      <div className="layout">
        {this.state.nextId === "6a" || this.state.nextId === "6b" ? (
          <>
            <h1 className="historia">
              THE END
              <br />
              ¡GRACIAS POR JUGAR!
            </h1>
            <p className="opciones">
              Acá iría un botón para volver a jugar, pero por ahora, actualiza
              la página para eso... ¡Gracias!
            </p>
          </>
        ) : (
          <>
            <h1 className="historia">{fragment.historia}</h1>
            <Options
              handleOptions={this.handleOptions}
              options={this.state.currentOptions}
            />
            <Logbook
              previousSelection={this.state.previousSelection}
              userStory={this.state.userStory}
            />
          </>
        )}
      </div>
    );
  }
}
