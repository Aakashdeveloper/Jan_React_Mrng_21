import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

const Home = (props) => {
    console.log(props)
    return(
        <React.Fragment>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
    )
}


export default Home;