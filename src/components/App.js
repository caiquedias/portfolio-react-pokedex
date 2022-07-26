import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import "./styles/App.css";
import Pokemon from "../Pokemon";
import PokemonCharacteristic from "../PokemonCharacteristic";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      pokemonCharacteristic: {},
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });

        this.getCharacteristics(id);
      })
      .catch((err) => alert(err));
  }

  getCharacteristics(id) {
    fetch(`https://pokeapi.co/api/v2/characteristic/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        let characteristic = null;
        let pokemonCharacteristic = null;
        const descriptionList = data.descriptions;

        if (descriptionList.length > 0 || data === "Not Found") {
          characteristic = {
            description: data.descriptions.filter(
              (element) => element.language.name === "en"
            )[0].description,
          };
        } else {
          characteristic = {
            description: "No description available",
          };
        }

        pokemonCharacteristic = new PokemonCharacteristic(characteristic);
        this.setState({ pokemonCharacteristic });
      })
      .catch((err) => this.getDefaultDescription());
  }

  getDefaultDescription() {
    const characteristic = {
      description: "No description available",
    };

    const 
    pokemonCharacteristic = new PokemonCharacteristic(characteristic);
    this.setState({ pokemonCharacteristic });
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView
          pokemon={this.state.pokemon}
          pokemonCharacteristic={this.state.pokemonCharacteristic}
        />
      </div>
    );
  }
}

export default App;
