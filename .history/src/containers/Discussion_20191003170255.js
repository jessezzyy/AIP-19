import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'layui/css/layui.css';
import layui from'layui/layui.js';
//import axios from 'axios';
import '../style/web.css';

class Discussion extends Component{
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
            <Menu>
            <Menu.Item>
                <Link to="/Home/" style={{color:'black'}}>
                    <div>Home</div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/Honorroll/" style={{color:'black'}}>
                    <div>Honor roll</div>
                </Link>
            </Menu.Item>
            {/* <Menu.Item>
                {this.changeContent()}
            </Menu.Item> */}
            </Menu>

            <div class="show">
                <div class="photo">
                <Image   rounded src={require('../img/zx.jpeg')}/>
                </div>
                <div class="intro">
                  <Link to="/Comment/" style={{color:'black'}}>
                      <div class="introa">Reply</div>
                  </Link>
                  <Link to="/Praise/" style={{color:'black'}}>
                  <div class="introa">Praise</div>
                  </Link>
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Image   rounded src={require('../img/zc.jpeg')}/>
                </div>
                <div class="intro">
                  <Link to="/Comment/" style={{color:'black'}}>
                      <div class="introa">Reply</div>
                  </Link>
                  <Link to="/Praise/" style={{color:'black'}}>
                  <div class="introa">Praise</div>
                  </Link>
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Image   rounded src={require('../img/ww.jpeg')}/>
                </div>
                <div class="intro">
                  <Link to="/Comment/" style={{color:'black'}}>
                      <div class="introa">Reply</div>
                  </Link>
                  <Link to="/Praise/" style={{color:'black'}}>
                  <div class="introa">Praise</div>
                  </Link>
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Image   rounded src={require('../img/qq.jpeg')}/>
                </div>
                <div class="intro">
                  <Link to="/Comment/" style={{color:'black'}}>
                      <div class="introa">Reply</div>
                  </Link>
                  <Link to="/Praise/" style={{color:'black'}}>
                  <div class="introa">Praise</div>
                  </Link>
                  </div>
            
            </div>

            <div class="show">
                <div class="photo">
                <Image   rounded src={require('../img/ss.jpeg')}/>
                </div>
                <div class="intro">
                  <Link to="/Comment/" style={{color:'black'}}>
                      <div class="introa">Reply</div>
                  </Link>
                  <Link to="/Praise/" style={{color:'black'}}>
                  <div class="introa">Praise</div>
                  </Link>
                  </div>
            
            </div>

            <div class="layui-upload-drag" id="test10">
  <i class="layui-icon"></i>
  <p>点击上传，或将文件拖拽到此处</p>
</div>
                   
        </div>
    
    
        )
      }
    
      function(){
      var upload = layui.upload;
      upload.render({
        elem: '#test10'
        ,url: '/upload/'
        ,done: function(res){
          console.log(res)
        }
      });
      }
  
}



  export default Discussion;