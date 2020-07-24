import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
    const [data, setData] = useState(null);

    const clientID = "jm6e0q7nywrjzmj0nz7nj4b077ote7";
    const clientSECRET = "vkjh9793xqn2q5b7fu8rymckdrjhu8";
    const url = `https://id.twitch.tv/oauth2/authorize?client_id=${clientID}&redirect_uri=https://bootcamp.pro/&response_type=id_token&scope=openid user:edit user:read:email`;
    const options = { 
        method: 'GET',
        headers: { 
            'accept': 'application/vnd.twitchtv.v5+json',
            'Content-Type': 'application/json'
        },
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        'Access-Control-Allow-Origin': "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST"
    } 
    
    useEffect(() => {
        if (window.location.hash) {
            let hash = window.location.hash.substring(10);
            setData(hash);
        }
    }, []);

    return (
        <Fragment>
            <div className="App">
                { data ? "JWT pulled" : "still no jwt.."}
                <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${clientID}&redirect_uri=https://bootcamp.pro/&response_type=id_token&scope=openid user:edit user:read:email`}><button>Login with Twitch</button></a>
            </div>
            <Router>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/about" component={ About }></Route>
                    <Route path="/contact" component={ Contact }></Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;