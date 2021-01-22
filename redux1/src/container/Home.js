import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions/actionFile';
import DisplayMovies from '../component/DisplayMovies'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayMovies datalist={this.props.mydata}/>
            </div>
        )
    }
}

//will recive the state from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}


export default connect(mapStateToProps)(Home)