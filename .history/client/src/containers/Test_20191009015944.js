import React,{Component,Fragment} from 'react';
import axios from 'axios';


class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount(){
       this.getList();
     }

     getList(){
        var that = this;
        axios.get('/getList')
        .then(function (response){
            console.log(response.data);
            that.setState({list: response.data});
        });
     }

    render(){
        
        return(
            <div>
                <Fragment>
                    <h1>Users Rank</h1>
                <ul>
                {this.state.list.map((item) => {
              return(
                <li>
                  {item}
                  </li>
              )})}
                   
                </ul>
                <div>
     </div>
         
       

                </Fragment>

            </div>
        )
    }

}

export default Test