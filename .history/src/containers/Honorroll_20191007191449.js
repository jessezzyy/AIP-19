import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
//import axios from 'axios';
import '../style/web.css';

class Honorroll extends Component{
    constructor(props) {
        super(props);
        //this.isLogi = this.isLogin.bind(this);
       // this.isLogin2 = this.isLogin2.bind(this);
        //this.logout = this.logout.bind(this);
       //this.changeContent = this.changeContent.bind(this);
        this.state = { 
            username: ''
         };
    }
    render(){
        return (
            <div>

            <div class="show">
                <div class="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/qq.jpeg')}/>
                </Link>
                </div>
                <div class="intro">
                  <div class="introa">1600</div>
                  <div class="introa"> <Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/zx.jpeg')}/>
                </Link>
                </div>
                <div class="intro">
                  <div class="introa">1400</div>
                  <div class="introa"> <Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/zc.jpeg')}/>
                </Link>
                </div>
                <div class="intro">
                  <div class="introa">1100</div>
                  <div class="introa"> <Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/as.jpeg')}/>
                </Link>
                </div>
                <div class="intro">
                      <div class="introa">980</div>
                  <div class="introa"><Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/ww.jpeg')}/>
                </Link>
                </div>
                <div class="intro">          
                      <div class="introa">699</div>
                
                  <div class="introa"><Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>
            
                   
        </div>
    
    
        )
      }

  
}



  export default Honorroll;