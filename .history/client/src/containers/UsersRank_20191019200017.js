import React,{Component,Fragment} from 'react';
import axios from 'axios';


class UsersRank extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

  // execute when page is loading
    componentDidMount(){
        this.getList();
    }

   // request to get all users' information
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

  // page content
    render(){
      return(
        <div>
          <Fragment>
            <h1>Users Rank</h1>
            <ul>
              {this.state.list.map((item, idx) => (
                <li key={idx}>
                 <p>    Username:{item.username}       
                 </p> 
                 <p> No.{idx+1}      </p>
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
