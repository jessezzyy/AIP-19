import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import axios from 'axios';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: ''
         };
         this.logout=this.logout.bind(this);
    }

    // show log out link if users log in             
    changeContent() { 
        var that = this;
        //request to check if users log in
        axios.post('/', {
            user: this.state.username,
          })
          .then(function (response)  {
            console.log(response.data);
            if(response.data!=='nologin'&&!that.state.username){
             that.setState({username: response.data})
            }
          })
          .catch(function (error) {
            console.log(error);
          });
         // if users already log in
        if (this.state.username){
            return (
                <Link to="/" style={{color:'black'}}>
                  <div onClick={this.logout}> Log out</div>
                </Link>
            );
            }
        else 
        // if users did not log in
            return(
                <Link to="/login/" style={{color:'black'}}>
                  <div>Please Log in</div>
                </Link>);
           }
           
       // deal wit users logging out
      logout(){
          var that = this;
          axios.post('/home/logout', {
            user: []
          })
          .then(function (response)  {
            that.setState({username: ''})
              window.alert("Log out sucessfully");
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    // page content
    render(){
        return(
            <div>
                <Image width="100%" rounded src={require('../img/blog.jpg')}/>
                <Menu>
                    <Menu.Item>
                        <Link to="/home/" style={{color:'black'}}>
                            <div>Home</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/userrank/" style={{color:'black'}}>
                            <div>User Rank</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/discussion/" style={{color:'black'}}>
                            <div>Discussion</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        {this.changeContent()}
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navigation;