import React,{Component,Fragment} from 'react';
import axios from 'axios';


class UsersRank extends Component{
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
      axios.post('/getList', {
        list: []
      })
      .then(function (response)  {
        console.log(response.data);
        that.setState({list: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
           
    }

    render(){
      return(
        <div>
          <Fragment>
            <h1>Users Rank</h1>
            <ul>
              {this.state.list.map((item, idx) => (
                <li key={idx}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  Username:{item.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  No.{idx+1}
                </li>
	              ))
              }
            </ul>
          </Fragment>
         </div>
      )
    }
}

export default UsersRank
