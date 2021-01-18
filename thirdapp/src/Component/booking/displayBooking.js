import React,{Component} from 'react';
import axios from 'axios';
import ViewBooking from './viewBooking';

const BookingUrl = "http://localhost:8900/bookings";

class DisplayBooking extends Component{
    constructor(){
        super()

        this.state={
            bookings:''
        }
    }

    render(){
        return(
            <div>
                <ViewBooking bookdata={this.state.bookings}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(BookingUrl).then((res) => {this.setState({bookings:res.data})})
    }

}

export default DisplayBooking;