import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import ListingApi from './Component/Listing/listingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:id" component={ListingApi}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )

}

export default Routing
