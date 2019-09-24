import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = { 
         username: null
      };
        this.componentDidMount = this.componentDidMount.bind(this);
  }
  render(){
    return (
        <div>
        <Image width="100%" rounded src={require('../img/blog.jpg')}/>
        <Menu>
        <Menu.Item>
            <Link to="/login/" style={{color:'black'}}>
                {this.componentDidMount()}
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/Test/" style={{color:'black'}}>
                <div>Test</div>
            </Link>
        </Menu.Item>
        </Menu>
               
    </div>


    )
  }

  componentDidMount() {
    console.log(this.props.match.params.username);
    if (this.props.match.params.username)
        return (<div> Log out</div>);
    else 
        return(<div>Please Log in</div>);
}


  Greeting(props) {
      const isloggedIn = props.isloggedIn;
      if (isloggedIn)
        return 1;
  }
}

export default Home;
