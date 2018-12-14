import React, { Component } from 'react';
import { Table, Input } from 'reactstrap';
import Loader from '../Loader';
import './AllPokemons.css'


class AllPokemons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemons: [],
      input: ''
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pokemons: result.results
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

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    const { error, isLoaded, pokemons } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          <div className="input_wrapper">
            <Input type="text" name="name" id="pokemon" placeholder="Search for..." onChange={this.onChange}/>
          </div>
          <Table>
            <tbody>
              {pokemons
              .filter(item => this.state.input === '' || item.name.includes(this.state.input))
              .map(item => (
                <tr key={item.name}>
                  <td>{item.name.toUpperCase()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </React.Fragment>
      );
    }
  }
}

export default AllPokemons;