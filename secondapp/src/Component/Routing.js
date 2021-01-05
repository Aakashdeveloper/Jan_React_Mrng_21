import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import PostDetails from './PostDetails';

const Routing = () => { 
    return(
    <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/post" component={Post}/>
            <Route exact path="/post/:id" component={PostDetails}/>
            <Route path="/post/:id/:abc" component={PostDetails}/>
            <Route path="/profile" component={Profile}/>
            <Footer/>
        </div>
    </BrowserRouter>
    )
    
}

export default Routing