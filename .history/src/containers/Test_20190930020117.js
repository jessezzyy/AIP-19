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
                <ul>
                {this.state.list.map(list => <li>{list.name}</li>)}
                   
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
            that.setState({list: response.data});
        });
      }
}

export default Test