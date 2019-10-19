//User rank page
import React,{Component,Fragment} from 'react';
import getList from '../components/user_rank.js'
class UsersRank extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []  //temporary storage users' username getting from database
        }
    }

  // execute when page is loading
    componentDidMount(){
       this.setState({list: response.data});
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
                 <pre>    Username:{item.username}                     No.{idx+1}          
                 </pre> 
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
