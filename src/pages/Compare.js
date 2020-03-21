import React, {Component} from 'react';

class Compare extends Component{
    constructor(props){
        super(props);
        this.state={
            playerName: '',
            player_name: [],
            playerkeep: [],
            compare_content: [],
            compare_content1: '',
            compare_content2: '',
        }
    }

    render(){
        return(
            <div>
                <div className="logo_cont">
                    <img className="logo" src="../assets/background.jpg" />
                </div>
                <div className="search_cont">
                    <input type="text" className="search_playerName" placeholder="선수이름" />
                    <button type="button" className="search_button" onClick={}>검색</button>
                </div>
                {}
                {}
                {}
            </div>
        );
    }
}

export default Compare;