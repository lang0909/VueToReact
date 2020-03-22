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

    handleSearchResult(array){
        let arr =[];
        for(i=0;i<array.length;i++){
            arr.push(
                <span>
                    <span>
                        <img 
                            src={require(`/players/${array[i].id}`)}
                            className="back_img"
                            style={{backgroundImage=require(`/season_background/${array[i].id.substring(0,3)}.png`)}}>
                        </img>
                    </span>
                    <div className="name_cont">
                        <span>
                            <img
                                src={require(`/season/${array[i].id.substring(0,3)}.JPG`)} className="img_cont">
                            </img>
                            {array[i].name}
                        </span>
                    </div>
                    <div>
                        <button type="button" value={array[i].id} onClick={} className="player_btn">선택</button>
                    </div>
                </span>
            );
        }
        return arr;
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
                <div>
                    {this.state.player_name.length == 0 ?
                    <></>:
                    this.handleSearchResult(this.state.player_name)}
                </div>
            </div>
        );
    }
}

export default Home;