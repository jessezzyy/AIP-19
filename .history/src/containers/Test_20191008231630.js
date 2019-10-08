import React,{Component,Fragment} from 'react';
import axios from 'axios';


class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    render(){
        return(
            <div>
                <Fragment>
                    <h1>Users Rank</h1>
                <ul>
        {this.state.list.map((item,i) => <li key={i} value={item}>{item}</li>)}
                   
                </ul>
                <div>
     </div>
         
       

                </Fragment>

            </div>
        )
    }


      componentDidMount(){
         var that = this;
        axios.get('/test')
        .then(function (response){
            console.log(response.data);
            that.setState({list: response.data});
        });
      }
}

export default Test