import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    /*var a = [23,45,67,87,45]
    a.filter((data) => {return data>50})*/
    filterNews = (keyword) => {
        const output = this.state.news.filter((data) => {
            return data.title.indexOf(keyword) >-1
        })

        this.setState({filtered:output})
    }
    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(userInput) => {this.filterNews(userInput)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2021" title="Developer Funnel"/>
            </React.Fragment>
        )
    }
}

export default Home;
