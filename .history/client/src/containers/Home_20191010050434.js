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
        <div class="square">
          <ul class="square-inner float">
          {this.state.list.map((item, idx) => (
            <li key={idx}><Image width="100%" rounded src={item.url}/>1</li>
          ))}s
          </ul>
        </div>


    )
  }
}

export default Home;
