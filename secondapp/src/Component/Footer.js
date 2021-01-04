import React,{Fragment} from 'react';

const Footer  = (props) => {
    return(
        <Fragment>
            <hr/>
            <center>
                <h3>&copy; {props.title} {props.year}</h3>
            </center>
        </Fragment>
    )
}

export default Footer;