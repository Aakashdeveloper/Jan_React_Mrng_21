import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import ListingApi from './Component/Listing/listingApi';
import Details from './Component/details/hotelDetails';
import PlaceBooking from './Component/booking/placeBooking';
import ViewBooking from './Component/booking/displayBooking';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:id" component={ListingApi}/>
                <Route exact path="/details/:id" component={Details}/>
                <Route exact path="/booking/:hotel_name" component={PlaceBooking}/>
                <Route exact path="/viewBooking" component={ViewBooking}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )

}

export default Routing
