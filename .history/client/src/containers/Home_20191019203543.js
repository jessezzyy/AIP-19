//homepage
import React,{Component} from 'react';
import {Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import {AllImage} from '../components/AllImg.js'
import '../style/web.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          list: []
        }
  }
  
  // execute when page is loading
  componentWillMount(){
    this.setState({list: {AllImage}})
  }

  // read all discussion images from database

 
  // page content
  render(){
    return (
        <div className="square">
          <ul className="square-inner float">
          {this.state.list.map((item, idx) => (
            <li key={idx}>
              <Link to={'/blog/'+item._id}>
                <Image width="100%" src={item.url}/>
              </Link>
            </li>
          ))}
          </ul>
        </div>
    )
  }
}

export default Home;
