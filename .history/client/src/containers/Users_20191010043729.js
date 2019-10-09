import React,{Component,Fragment} from 'react';
import axios from 'axios';


class Users extends Component{
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
        const user = this.state.list.map(user => {
            return (
                <li key={user.name}>{user.name}</li>
            )
         });
        return(
            <div>
                <Fragment>
                    <h1>Users Rank</h1>
                <ul>
                {this.state.list.map((item, idx) => (
       <li key={idx}>
         Name: {item.name}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          Username:{item.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          No.{idx+1}
        </li>
	))
}
                   
                </ul>
                <div>
     </div>
         
       

                </Fragment>

            </div>
        )
    }

}

export default Users