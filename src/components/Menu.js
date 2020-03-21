import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component{
    render(){
        return(
            <div>
                <Link to="/">Home</Link> |  
                <Link to="/compare">Compare</Link> |  
                <Link to="/recommend">Recommend</Link>
            </div>
        );
    }
}

export default Menu;