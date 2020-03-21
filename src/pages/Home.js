import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            player_name: [],
            playerName: '',
            spid: '',
        }
    }

    handleClicked(id){
        this.setState({
            spid: id
        });
    }

    render(){
        return(
            <div>
                <div className="logo_cont">
                    <img className="logo" src="../assets/background.jpg"></img>
                </div>
                <div className="search_cont">
                    <input type="text" placeholder="선수이름" />
                    <button type="button" className="search_button" onClick={}>검색</button>
                </div>
                {}
            </div>
        );
    }
}

export default Home;