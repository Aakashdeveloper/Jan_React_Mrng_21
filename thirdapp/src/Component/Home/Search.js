import React,{Component} from 'react';
import './Search.css';

const CityUrl = "https://developerfunnel.herokuapp.com/location";
const Hurl = "https://developerfunnel.herokuapp.com/hotels?city=6"

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>-----SELECT CITY-----</option>
                    </select>
                    <select className="reataurantsinput">
                        <option>-----SELECT Hotel-----</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Search;