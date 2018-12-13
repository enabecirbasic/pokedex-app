import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllPokemons from './components/AllPokemons';
import Layout from './layout/Layout';

const App = () => (
  <Router>
    <Layout><Route path="/" exact component={AllPokemons} /></Layout>

    {/* <Route path="/about/" component={About} /> */}
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));