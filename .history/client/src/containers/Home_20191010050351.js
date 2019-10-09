import React,{Component} from 'react';
import {Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import '../style/web.css';

class Home extends Component{
    constructor(props) {
        super(props);
  }

  render(){
    return (
        <div class="square">
          <ul class="square-inner float">
          {this.state.list.map((item, idx) => (
            <li key={idx}><Image width="100%" rounded src={item.url}/>1</li>
          ))}
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


    )
  }
}

export default Home;
