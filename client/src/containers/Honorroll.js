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

            <div className="show">
                <div className="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/qq.jpeg')}/>
                </Link>
                </div>
                <div className="intro">
                  <div className="introa">1600</div>
                  <div className="introa"> <Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div clasclassNames="show">
                <div className="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/zx.jpeg')}/>
                </Link>
                </div>
                <div className="intro">
                  <div className="introa">1400</div>
                  <div className="introa"> <Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div className="show">
                <div className="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/zc.jpeg')}/>
                </Link>
                </div>
                <div clclassNameass="intro">
                  <div className="introa">1100</div>
                  <div className="introa"> <Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div className="show">
                <div className="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/as.jpeg')}/>
                </Link>
                </div>
                <div className="intro">
                      <div className="introa">980</div>
                  <div className="introa"><Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>

            <div className="show">
                <div className="photo">
                <Link to="/Comment/" style={{color:'black'}}>
                <Image   rounded src={require('../img/ww.jpeg')}/>
                </Link>
                </div>
                <div className="intro">          
                      <div className="introa">699</div>
                
                  <div className="introa"><Image   rounded src={require('../img/fire.jpeg')}/></div>
                  
                  </div>
            
            </div>
            
                   
        </div>
    
    
        )
      }

  
}



  export default Honorroll;