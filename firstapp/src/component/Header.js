import React,{Component,Fragment} from 'react';
import './header.css';

class Header extends Component{
    constructor(){ //first thing that called/all declaration here
        super() //to inherit

        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }

    render(){
        return(
            <Fragment>
                <header >
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}


export default Header;
