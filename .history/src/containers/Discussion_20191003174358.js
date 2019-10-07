import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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

            <form action={this.state.uri} method="post" encType="multipart/form-data">
	        <div className="ry-upload-box">
	            <div className="upload-main">
                    <div className="upload-choose">
                        <input
                            onChange={(v)=>this.handleChange(v)}
                            type="file"
                            size={this.state.size}
                            name="fileSelect"
                            accept="image/*"
                            multiple={this.state.multiple} />
	                    <span ref="dragBox"
                            onDragOver={(e)=>this.handleDragHover(e)}
                            onDragLeave={(e)=>this.handleDragHover(e)}
                            onDrop={(e)=>this.handleDrop(e)}
                            className="upload-drag-area">
                            或者将图片拖到此处
                        </span>
                    </div>
                    <div className={this.state.files.length?
                         "upload-preview":"upload-preview ry-hidden"}>
                        { this._renderPreview()}  // 渲染图片预览列表 
                    </div>
                </div>
                <div className={this.state.files.length?
                     "upload-submit":"upload-submit ry-hidden"}>
                     <button type="button"
	                     onClick={()=>this.handleUpload()}
                         class="upload-submit-btn">
                         确认上传图片
                     </button>
	            </div>
                <div className="upload-info">
	                { this._renderUploadInfos()}   // 渲染图片上传信息 
                </div>
            </div>
        </form>
                   
        </div>
    
    
        )
      
    
}

}

  export default Discussion;