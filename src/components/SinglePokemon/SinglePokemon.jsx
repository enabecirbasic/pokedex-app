import React, { Component } from 'react';
import Loader from '../Loader';

class SinglePokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: null,
    };
  }

  componentDidMount() {
    const { pokemonName } = this.props.match.params
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pokemon: result
          });
        }, 
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
    const { error, isLoaded, pokemon } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          {pokemon.name}
        </React.Fragment>
      );
    }
  }
}

export default SinglePokemon;