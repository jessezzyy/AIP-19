//homepage
import React,{Component} from 'react';
import {Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
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
    this.getAllimage();
  }

  // read all discussion images from database
  getAllimage(){
    var that = this;
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
      that.setState({list: response.data});
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
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
