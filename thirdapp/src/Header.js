import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Header.css'

class Header extends Component{
    constructor(){
        super()
        this.state={
            username:''
        }
        
    }

    conditionalRender=()=>{
        if(sessionStorage.getItem('username')==null||sessionStorage.getItem('username')==undefined){
            return(
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=841775ffdee13afd7f4f"><span class="glyphicon glyphicon-log-in"></span> Login With Git</a>
                </li>
            )
        }else{
            return(
                <li>
               
                <a href=""><img src={this.state.username} className="myimage" /> Hi {sessionStorage.getItem('username')}</a>

            </li> 
            )
        }


    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Developer Hotel</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            {this.conditionalRender()}
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    componentDidMount(){
        const code =(this.props.location.search).split('=')[1];
        if(code){
            let requestData={
                code:code
            }
            fetch('http://localhost:9800/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestData)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                var result = data.login
                var img = data.avatar_url
                sessionStorage.setItem('username',result)
                this.setState({username:img})
            })
        }
    }
}

export default withRouter(Header);