import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component{
  render(){
    return (
        <div>
        <Image width="100%" rounded src={require('../img/blog.jpg')}/>
        <Menu>
        <Menu.Item>
            <Link to="/login/" style={{color:'black'}}>
                <div>Please Log in</div>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/Test/" style={{color:'black'}}>
                <div>Test</div>
            </Link>
        </Menu.Item>
        </Menu>
               <Draggable><div>wocao</div></Draggable>
    </div>


    )
  }
}

export default Home;
