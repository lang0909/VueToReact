import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Home, Compare, Recommend} from 'pages';
import Menu from 'components/Menu';

class App extends Component{
    render(){
        return(
            <div>
                <Menu />
                <Route exact path="/" component={Home}/> 
                <Route path="/compare" component={Compare}/> 
                <Route path="/recommend" component={Recommend}/>
            </div>
        );
    }
}

export default App;