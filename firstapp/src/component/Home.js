import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header/>
                <NewsDisplay newsdata={this.state.news}/>
                <Footer year="2021" title="Developer Funnel"/>
            </React.Fragment>
        )
    }
}

export default Home;
