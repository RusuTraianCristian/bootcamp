import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import FruitShop from './FruitShop';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/about" component={ About }></Route>
                    <Route path="/contact" component={ Contact }></Route>
                    <Route path="/fruitshop" component={ FruitShop }></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;












