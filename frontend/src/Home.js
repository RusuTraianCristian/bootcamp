import React, { Fragment, useState, useEffect } from 'react';

const Home = () => {

    const [data, setData] = useState(null);

    const clientID = "jm6e0q7nywrjzmj0nz7nj4b077ote7";
    const url = `https://id.twitch.tv/oauth2/authorize?client_id=${ clientID }&redirect_uri=http://localhost:3000&response_type=id_token&scope=openid user:edit user:read:email`;
    // const options = { 
    //     method: 'GET',
    //     headers: { 
    //         'accept': 'application/vnd.twitchtv.v5+json',
    //         'Content-Type': 'application/json'
    //     },
    //     "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    //     'Access-Control-Allow-Origin': "*",
    //     "Access-Control-Allow-Methods": "GET, OPTIONS, POST"
    // } 

    const twitchLogin = () => {
        window.location.href = url;
    }
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setData(token);
        } else console.log('you need to log in');
    }, []);

    useEffect(() => {
        if (window.location.hash) {
            let hash = window.location.hash.substring(10);
            setData(hash);
            sessionStorage.setItem('token', hash);
        }
    }, []);

    return (
        <Fragment>
            <div className="App">
                <div className = "logo">bootcamp</div>
                <div className = "logo"><span>.pro</span></div>
                <div className = "piclogo"></div>
                { data ? 'Successfully logged in!' : <button className = "twitch-login" onClick = {() => twitchLogin()}>twitch login</button> }
            </div>
        </Fragment>
    );
}

export default Home;
