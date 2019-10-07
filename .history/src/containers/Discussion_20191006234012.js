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
            showPreviewModal: false,
            showCropModal: false,
            imgFile: '',
            imgSrc: ''
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

            
    
<div>
    
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

                   
        </div>
    
    
        )
      }
    
      onFileChange(e) {
        const file = e.target.files[0];
        if (this.handleBeforeUpload(file)) {
        this.setState({ imgFile: file, showCropModal: true}, () => {
            this.handlePreview();
          });
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
        const that = this;
        const file = this.state.imgFile;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          that.setState({showPreviewModal: true, imgSrc: this.result })
        }
      }
      
      // 删除图片
      swapImageFile() {
        this.setState({ imageUrl: '' });
      }
      uploadButton(){
          return(
              <div>meiy</div>
          

          );
      }
}



  export default Discussion;