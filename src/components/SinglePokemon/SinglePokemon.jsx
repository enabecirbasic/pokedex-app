import React, { Component } from "react";
import Loader from "../Loader";
import "./SinglePokemon.css";

class SinglePokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: null
    };
  }

  componentDidMount() {
    const { pokemonName } = this.props.match.params;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            pokemon: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      window.scrollTo(0, 0)
  }

  render() {
    const { error, isLoaded, pokemon } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          <div className="pokemon_name">{pokemon.name}</div>
          <div className="pokemon_img">
            <img src={pokemon.sprites.front_default} alt="pokemon" />
          </div>
          <div className="basic_info_wrapper">
            <div className="info_item">
              <div className="info_title">type</div>
              <div className="info_content">
                {pokemon.types.map((item, index) => {
                  return <div key={index}>{item.type.name.toUpperCase()}</div>;
                })}
              </div>
            </div>

            <div className="info_item">
              <div className="info_title">height</div>
              <div className="info_content">{pokemon.height}</div>
            </div>

            <div className="info_item">
              <div className="info_title">experience</div>
              <div className="info_content">{pokemon.base_experience}</div>
            </div>

            <div className="info_item">
              <div className="info_title">weight</div>
              <div className="info_content">{pokemon.weight}</div>
            </div>

          </div>
        

          <hr className="divider"/>

          <div className="info_wrapper">
              <div className="info_title">abilities:</div>
              <ul className="info_content">
                {pokemon.abilities.map((item, index) => {
                  return <li key={index}>{item.ability.name.toUpperCase()}</li>;
                })}
              </ul>
            </div>
            <hr className="divider"/>

            <div className="info_wrapper">
              <div className="info_title">stats:</div> 
              <div className="info_content">
                {pokemon.stats.map((item, index) => {
                  return <div className="content_item" key={index}>{item.stat.name.toUpperCase()}: {item.base_stat}</div>;
                })}
              </div>
            </div>
            <hr className="divider"/>

            <div className="info_wrapper">
              <div className="info_title">moves:</div>
              <ul className="info_content">
                {pokemon.moves.map((item, index) => {
                  return <li key={index}>{item.move.name.toUpperCase()}</li>;
                })}
              </ul>
            </div>

            <hr className="divider"/>
        </React.Fragment>
      );
    }
  }
}

export default SinglePokemon;
