import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

class Home extends Component{
    constructor(props) {
        super(props);
       // this.changeContext = this.changeContext.bind(this);
        this.state = { 
            username: ''
         };
  }
  componentDidMount(){
    axios.post('/', {
        username
      })
      .then(function (response)  {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  /*componentDidMount(){
    axios.get('/user:username')
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }*/

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
            
        </Menu.Item>
        </Menu>
               
    </div>


    )
  }

 /* changeContext() {
      
    console.log(username);
    if (username){
        this.setState={user:username};
        return (
              <Link to="/" style={{color:'black'}}>
              <div> Log out</div>
              </Link>
        );
    }
    else 
        return(
            <Link to="/login/" style={{color:'black'}}>
            <div>Please Log in</div>
            </Link>);
}*/
}

export default Home;
