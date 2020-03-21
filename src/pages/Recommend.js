import React, {Component} from 'react';

class Recommend extends Component{
    constructor(props){
        super(props);
        this.state={
            temp_formation: '',
        }
    }

    render(){
        return(
            <div>
                <div className="entire">
                    포메이션:
                    <select onClick={}>
                        <option>select formation</option><option value="343">3-4-3</option><option value="3412">3-4-1-2</option><option value="32212">3-2-2-1-2</option><option value="31213">3-1-2-1-3</option>
                        <option value="3142">3-1-4-2</option><option value="3232">3-2-3-2</option><option value="41212">4-1-2-1-2</option><option value="4123">4-1-2-3</option><option value="4132">4-1-3-2</option>
                        <option value="4213">4-2-1-3</option><option value="4222">4-2-2-2</option><option value="4231">4-2-3-1</option><option value="4312">4-3-1-2</option><option value="433">4-3-3</option>
                        <option value="4411">4-4-1-1</option><option value="4141">4-1-4-1</option><option value="42211">4-2-2-1-1</option><option value="424">4-2-4</option><option value="442">4-4-2</option>
                        <option value="451">4-5-1</option><option value="51211">5-1-2-1-1</option><option value="523">5-2-3</option><option value="541">5-4-1</option><option value="5212">5-2-1-2</option><option value="532">5-3-2</option>
                    </select>
                    <br />
                    <></>
                </div>
            </div>
        );
    }
}

export default Recommend;