import React,{Component} from 'react';
import {Image } from 'semantic-ui-react';
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

  getAllimage(){
    var that = this;
    axios.post('/getAllImg',{
      content: " "
    })
      .then(function (response)  {
        that.setState({list: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    return (
        <div className="square">
          <ul className="square-inner float">
          {this.state.list.map((item, idx) => (
            <li ><Image width="100%" rounded src={item.url}/></li>
          ))}
          </ul>
        </div>


    )
  }
}

export default Home;
