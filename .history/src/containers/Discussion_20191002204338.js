import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
//import axios from 'axios';
import '../style/web.css';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

class Discussion extends Component{
    constructor(props) {
        super(props);
        //this.isLogi = this.isLogin.bind(this);
       // this.isLogin2 = this.isLogin2.bind(this);
        //this.logout = this.logout.bind(this);
       //this.changeContent = this.changeContent.bind(this);
        this.state = { 
            username: '',
            selectedImageFile:'',
            editImageModalVisible: false

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
                <Link to="/Honor-roll/" style={{color:'black'}}>
                    <div>Honor roll</div>
                </Link>
            </Menu.Item>
            {/* <Menu.Item>
                {this.changeContent()}
            </Menu.Item> */}
            </Menu>

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
                <Image   rounded src={require('../img/as.jpeg')}/>
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
            <label className="add-img-btn">
    <span>添加图片</span>
    <input
      type="file"
      accept="image/jpeg,image/jpg,image/png"
      className="base-upload-input"
      onChange={this.handleFileChange}
    />
  </label>
                   
        </div>
    
    
        )
      }

  
}

handleFileChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      if (file.size <= MAX_FILE_SIZE) {
        
        this.setState({
          selectedImageFile: file,
        }, () => {
          this.setState({
            editImageModalVisible: true,
          })
        })
      } else {
        console.log("文件过大")
      }
    }

    e.target.value = ''
  }
   
  handleSubmit = () => {}


  export default Discussion;