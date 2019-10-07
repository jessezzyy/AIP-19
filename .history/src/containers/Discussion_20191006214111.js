import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../style/web.css';

class Discussion extends Component{
    constructor(props) {
        super(props);
        //this.isLogi = this.isLogin.bind(this);
       // this.isLogin2 = this.isLogin2.bind(this);
        //this.logout = this.logout.bind(this);
       //this.changeContent = this.changeContent.bind(this);
        this.state = { 
            username: '',
            showPreviewModal: true,
            imageUrl: ''
         };
    }

    
    
    render(){
        const uploadButton = (
            <div className="upload-plus-text">
              <i type="plus" />
              <div className="ant-upload-text">上传照片</div>
            </div>
          );
        const imagePreview = (
            <div
              className="modal">
             
              <div className="preview-image">
                <span className="preview-image-btn">
                  <a title="预览图片" href="javascript:;">
                    <i
                      type="eye"
                      className="icon-btn"
                      onClick={this.handlePreview}
                    />
                  </a>
                  <a title="删除图片" href="javascript:;">
                    <i
                      type="delete"
                      className="icon-btn"
                      onClick={this.swapImageFile}
                    />
                  </a>
                </span>
              </div>
            </div>
          );
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

            <div>
           
</div>
    
<div>
    <input
      type="file"
      id={this.state.imageUrl ? '' : 'file'}
      accept="image/jpeg, image/gif, image/png, image/bmp"
      className="input-file"
      onChange={e => {
        this.onFileChange(e);
      }}
    />
    <label htmlFor="file" className="ant-upload">
      {this.state.imageUrl ? imagePreview : uploadButton}
    </label>
</div>
<div
  visible={this.state.showPreviewModal}
  title="图片预览"
  footer={null}
  width={700}
  onCancel={this.handlePreviewCancel}>
  <img alt="" style={{ width: '100%' }} src={this.state.imageUrl} />
</div>
                   
        </div>
    
    
        )
      }
    
      onFileChange(e) {
         var that = this;
        const file = e.target.files[0];
        e.target.value = ''; // 再次上传同一文件进行裁剪
        if (this.handleBeforeUpload(file)) {
          const reader = new FileReader();
          reader.onload = e => {
            const src = e.target.result;
            that.setState({
                initialImageUrl: src,
                showCropModal: true});
           /* const image = new Image();
            image.onload = () => {
                that.setState({
                  initialImageUrl: src,
                  showCropModal: true
                });
            };
            image.src = src;*/
          };
          reader.readAsDataURL(file);
        }
      }
    
    // 检查照片格式、大小等信息
      handleBeforeUpload(file) {
        const IMAGE_MAX_SIZE = 1024 * 1024; // 上传图片最大大小
        if (file) {
          const sizeOk = file.size < IMAGE_MAX_SIZE;
          const typeReg = new RegExp(/^image\/bmp|gif|jpg|jpeg|png$/, 'i');
          const typeOk = typeReg.test(file.type);
    
          if (!typeOk) {
           console.log('照片格式有误');
          } else if (!sizeOk) {
            console.log('照片大小超过1M');
          }
    
          return sizeOk && typeOk;
        }
      }

      handlePreview() {
        this.setState({
          showPreviewModal: true
        });
      }
      
      // 删除图片
      swapImageFile() {
        this.setState({ imageUrl: '' });
      }
      uploadButton(){}
}



  export default Discussion;