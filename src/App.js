import React, { Component } from 'react'
import Home from './Home';
import {  BrowserRouter , Route}from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
            </BrowserRouter>
        )
    }
}
