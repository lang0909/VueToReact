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

    async handleSeach(){
        this.setState({
            player_name: await this.$store.dispatch()  
        })
    }

    async handlePlayerKeep(id){
        if(this.state.playerkeep.length==2){
            alert("더 이상 추가할 수 없습니다.");
        }else if(this.state.playerkeep.length==1){
            this.state.playerkeep.concat(id);
            this.setState({
                compare_content1: await this.$store.dispatch(),
                compare_content2: await this.$store.dispatch(),
            })
        }else if(this.state.playerkeep.length==0){
            this.state.playerkeep.concat(id);
        }
    }

    handleCompare(){
        let fff = [];
        this.setState({
            compare_content: [],
        })
        for(let i=0;i<this.state.compare_content1.length;i++){
            for(let j=0;j<this.state.compare_content2.length;j++){
                if(this.state.compare_content1[i].spPosition === this.state.compare_content2[j].spPosition){
                    fff.push(this.state.compare_content1[i]);
                    fff.push(this.state.compare_content2[j]);
                    this.setState({
                        compare_content: fff,
                    })
                    fff=[];
                }
            }
        }
        if(this.state.compare_content.length==0){
            alert("비교가능한 포지션이 없습니다.");
        }
        this.setState({
            playerkeep: [],
            compare_content1: '',
            compare_content2: '',
        })
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
                        <button type="button" value={array[i].id} onClick={this.handlePlayerKeep(array[i].id)} className="player_btn">담기</button>
                    </div>
                </span>
            );
        }
        return arr;
    }

    handleCompareButton(){
        let brr = [];
        for(i=0;i<this.state.playerkeep.length;i++){
            brr.push(
                <div>
                    <div>
                        <span>
                            <img 
                                src={require(`/players/${this.state.playerkeep[i]}`)}
                                className="back_img"
                                style={{backgroundImage=require(`/season_background/${this.state.playerkeep[i].substring(0,3)}.png`)}}
                            />
                        </span>
                        <span>
                            <img
                                src={require(`/season/${this.state.playerkeep[i].substring(0,3)}.JPG`)}
                                className="img_cont"
                            />
                        </span>
                    </div>
                </div>
            );
        }
        return brr;
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
                <div>
                    {this.state.player_name.length == 0 ?
                    <></>:
                    this.handleSearchResult(this.state.player_name)}
                </div>
                <div>
                    {this.state.playerkeep.length == 0 ?
                    <></>:
                    (<hr />,
                    <button type="button" onClick={this.handleCompare()} className="compare_btn">비교하기</button>,
                    this.handleCompareButton())}
                </div>
            </div>
        );
    }
}

export default Compare;