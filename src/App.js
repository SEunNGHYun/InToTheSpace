import React, { Component } from 'react'
import Home from './Home';
import SearchNews from './SearchNews';
import { BrowserRouter , Route }from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/q/:query" component={SearchNews}/>
            </BrowserRouter>
        )
    }
}
