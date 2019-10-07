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
    }

    changeContent() { 
        axios.get('')
        .then(function (response)  {
            console.log(response);
            window.alert(response);
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

    render(){
        return(
            <div>
            <Image width="100%" rounded src={require('../img/blog.jpg')}/>
            <Menu>
            <Menu.Item>
                <Link to="/Test/" style={{color:'black'}}>
                    <div>Test</div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/Discussion/" style={{color:'black'}}>
                    <div>Discussion</div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/Honorroll/" style={{color:'black'}}>
                    <div>Honor roll</div>
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