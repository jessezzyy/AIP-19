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
        this.transfer = this.transfer.bind(this);
  }

  componentWillMount(){
    this.getAllimage();
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

  transfer(){
       
  }

  render(){
    return (
        <div className="square">
          <ul className="square-inner float">
          {this.state.list.map((item, idx) => (
            <li key={idx}><Link to={'/discussion/'+item.key_id}>
             <Image width="100%" onClick={this.transfer} src={item.url}/>
        </Link>
             
              </li>
          ))}
          </ul>
        </div>


    )
  }
}

export default Home;
