import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';

const Routing = () => { 
    return(
    <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
            <Route path="/profile" component={Profile}/>
            <Footer/>
        </div>
    </BrowserRouter>
    )
    
}

export default Routing