import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const CityUrl = "https://developerfunnel.herokuapp.com/location";
const Hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(){
        super()
        console.log("inside constructor")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        console.log("renderHotel>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} |  {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log("handleCity>>>",event.target.value)
        fetch(`${Hurl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            this.setState({hotels:data})
        })
        .catch((err) => console.log(err))
    }

    handleHotel=(event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log("inside render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>-----SELECT CITY-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>-----SELECT Hotel-----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    //on load
    componentDidMount(){
        console.log("inside componentDidMount")
        fetch(CityUrl,{
            method:'GET'
        })
        .then((res) =>res.json())
        .then((data) => this.setState({location:data}))
    }
}

export default withRouter(Search);