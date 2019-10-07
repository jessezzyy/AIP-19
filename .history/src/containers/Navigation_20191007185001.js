import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: ''
         };
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