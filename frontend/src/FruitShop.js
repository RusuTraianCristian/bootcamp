import React, { useState, useEffect, useContext } from 'react';
import './FruitShop.css';
import PropTypes from 'prop-types';

const FruitShop = ({name}) => {

    const [userInfo, setUserInfo] = useState({});
    const [data, setData] = useState({});

    const postData = async ({ url, options }) => {
        try {
            const response = await fetch(url, options);
            const status = response.status;
            const data = await response.json();
            setUserInfo(currentInfo => {
                return {
                    ...currentInfo,
                    ...data
                }
            });
        } catch (e) {
            console.error(e);
        }
    }

    const postMetadata = {
        url: 'https://getdata.com/api',
        options: {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        },
    }

    // context

    const Context = React.createContext('this is my datadasdassda');
    const myvalue = useContext(Context);
    
    function Child ({name}) {
        return (
            <>
                {`this is my context's value: ${myvalue}`}
                {name}
            </>
        );
    }

    const [fruitList, setFruitList] = useState([
        {
            name: 'strawberries',
            price: 5,
        },
        {
            name: 'melons',
            price: 3,
        },
        {
            name: 'apples',
            price: 2,
        }
    ]);

    const [formInputs, setFormInputs] = useState({
        name: '',
        price: '',
    });

    const addFruit = (field, e) => {
        setFormInputs({...formInputs, [field]: e})
    }

    const addToList = currentInput => {
        for (let i = 0; i < fruitList.length; i++) {
            if (fruitList[i].name === currentInput.name) {
                fruitList[i].price = currentInput.price;
                setFruitList([...fruitList], fruitList[i]);
            } else {
                setFruitList([...fruitList, currentInput]);
            }
        }
    }

    return (
        <>
            <form>
                <label>add fruit name:</label>
                <input type = "text" placeholder = "add fruit name" value = {formInputs.name} onChange = {e => addFruit('name', e.target.value)}/>
                <label>add fruit price:</label>
                <input type = "text" placeholder = "add fruit price" value = {formInputs.price} onChange = {e => addFruit('price', e.target.value)}/>
            </form>
            <button onClick = {() => addToList(formInputs)}>ADD FRUIT!</button>
            { fruitList.map(e => (<>{ e.name }{ e.price }</>)) }
            <Context.Provider>
                <Child name = "matdasdaa"/>
            </Context.Provider>
            {name}
        </>
    );
}
FruitShop.propTypes = {
    name: PropTypes.string
};

export default FruitShop;