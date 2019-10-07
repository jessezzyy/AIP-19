import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu,Image} from 'semantic-ui-react';
import { Modal, Button} from 'react-bootstrap';
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css';
import '../style/web.css';
import { Icon } from 'semantic-ui-react';

class Discussion extends Component{
    constructor(props) {
            super(props)
            this.state = {
              imgFile: null,
              imgSrc: "",
              showPreviewModal: false,
              showCropModal:false
            }
          }
        
        
        
       
          
        
        
          renderUpload() {//上传完成
            const imgBox = this.state.disabled ? "img-box-preview-hide" : "img-box-preview-show"
            return (
              <div className={imgBox} style={{ height: this.props.height }}>
                <div className="img-preview">
                  <Icon type="eye-o" className="img-operate" onClick={this.original.bind(this)} />
                 
                </div>
              </div>
            )
          }
       
        
          imgChange(e) {//获取文件图片
            this.setState({ imgFile: e.target.files[0], renderState: "loading" }, () => {
              this.previewImg()
            })
          }
        
          previewImg() {//本地预览
            const that = this;
            const file = this.state.imgFile;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
              that.setState({imgSrc: this.result })
            }
          }
        
          original() {//原图查看
            this.setState({ isPreview: true })
          }
        
          getImgFile() {
            return {file:this.state.imgFile,src:this.state.imgSrc}
        }
      
        cancelModal() {//关闭弹窗
          this.setState({ isPreview: false })
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
            

            
            <div>
            <input
  type="file"
  id='file'
  accept="image/jpeg, image/gif, image/png, image/bmp"
  className="input-file"
  onChange={e => {
    this.onFileChange(e);
  }}
/>
<label htmlFor="file" className="ant-upload">  
<div className="upload-plus-text">
        <Icon type="plus" />
        <div className="ant-upload-text">upload</div>
      </div>
    </label>
            </div>
    
            <div>
            <Modal 
  onHide={() => setShow(true)}
  title="图片预览"
  footer={null}
  width={700}
  onCancel={this.handlePreviewCancel}>
  <img alt="" style={{ width: '100%' }} src={this.state.imgSrc} />
</Modal>
      </div>


     
                   
        </div>
    
    
        )
      }

      showImage(){
        const [modalShow, setModalShow] = React.useState(false);

        if (this.state.imgSrc){
        return (
            <this.MyModal
        show={modalShow}
        onHide={() => setModalShow(true)}
      />
        )
        }
        else{
            return (
                <this.MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
            )

        }
      }

    MyModal(props) {
        return (
            <Modal footer={null}
            onCancel={this.cancelModal.bind(this)}
            width="auto" wrapClassName="img-center"
            style={{ display: "inline-block" }}
          >
            <img src={this.state.imgSrc} className="preview-all" />
          </Modal>
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
          that.setState({imgSrc: this.result })
        }
      }
      
      // 删除图片
      swapImageFile() {
        this.setState({ imgSrc: '' });
      }
      
}



  export default Discussion;