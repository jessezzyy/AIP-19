import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import '../style/web.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.isLogi = this.isLogin.bind(this);
        this.isLogin2 = this.isLogin2.bind(this);
        this.logout = this.logout.bind(this);
       this.changeContent = this.changeContent.bind(this);
        this.state = { 
            username: ''
         };
  }

  isLogin(){
    var that = this;
    axios.get('/user:username')
      .then(function (response)  {
        console.log(response.data);
        if(response.data==='mei'){
            that.props.history.push('/');
        }
        else {
            console.log(response.data);
            that.setState({username: response.data})
            
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}

  isLogin2(){
    var that = this;
    axios.post('/', {
        user: this.state.username,
      })
      .then(function (response)  {
        console.log(response.data);
        if(response.data!=='mei'){
         that.setState({username: response.data})
          that.props.history.push('/user/'+response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
 }
  componentDidMount(){
      var user = this.props.match.params.username;
      console.log(user);
      if (user){
         this.isLogin();
      }
      else 
         this.isLogin2();
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
        <div class="square">
          <ul class="square-inner float">
            <li><Image width="100%" rounded src={require('../img/ss.jpeg')}/>1</li>
            <li><Image width="100%" rounded src={require('../img/zc.jpeg')}/>2</li>
            <li><Image width="100%" rounded src={require('../img/zx.jpeg')}/>3</li>
            <li><Image width="100%" rounded src={require('../img/ww.jpeg')}/>4</li>
            <li><Image width="100%" rounded src={require('../img/ss.jpeg')}/>5</li>
            <li><Image width="100%" rounded src={require('../img/qq.jpeg')}/>6</li>
            <li><Image width="100%" rounded src={require('../img/ss.jpeg')}/>7</li>
            <li><Image width="100%" rounded src={require('../img/ss.jpeg')}/>8</li>
            <li><Image width="100%" rounded src={require('../img/ss.jpeg')}/>9</li>
          </ul>
        </div>
               
    </div>


    )
  }

  changeContent() { 
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
        axios.get('/user/logout')
        .then(function (response)  {
            window.alert("Log out sucessfully");
        });
 }
}

export default Home;
