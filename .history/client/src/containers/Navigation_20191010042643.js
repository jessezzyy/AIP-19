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

    changeContent() { 
        var that = this;
        axios.post('/', {
            user: this.state.username,
          })
          .then(function (response)  {
            console.log(response.data);
            if(response.data!=='meiyou'&&!that.state.username){
             that.setState({username: response.data})
            }
          })
          .catch(function (error) {
            console.log(error);
          });

        if (this.state.username){
            return (
                  <Link to="/" style={{color:'black'}}>
                  <div onClick={this.logout}> Log out</div>
                  </Link>
            );
            }
        else 
            return(
                <Link to="/login/" style={{color:'black'}}>
                <div>Please Log in</div>
                </Link>);
           }

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
                <Link to="/users/" style={{color:'black'}}>
                    <div>Test</div>
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