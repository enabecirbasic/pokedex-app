import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllPokemons from './components/AllPokemons';
import SinglePokemon from './components/SinglePokemon';
import Layout from './layout';

const App = () => (
  <Router>
    <Layout>
      <Route path="/" exact component={AllPokemons} />
      <Route path="/:pokemonName" component={SinglePokemon} />
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));