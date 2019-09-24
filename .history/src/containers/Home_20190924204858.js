import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.changeContent = this.changeContent.bind(this);
        this.state = { 
            username: ''
         };
  }


  changeContent() {
      var username = '';
    axios.get('/')
    .then((response) => {
      console.log(response.data);
      username = response.data;
    });
    if (username!=='mei'){
        this.setState={user:response.data};
        return (
              <Link to="/" style={{color:'black'}}>
              <div> Log out</div>
              </Link>
        );
    }
    else {
        return(
            <Link to="/login/" style={{color:'black'}}>
            <div>Please Log in</div>
            </Link>);
    }
}

  render(){
    return (
        <div>
        <Image width="100%" rounded src={require('../img/blog.jpg')}/>
        <Menu>
        <Menu.Item>
            <Link to="/Test/" style={{color:'black'}}>
                <div>Test</div>
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



export default Home;
