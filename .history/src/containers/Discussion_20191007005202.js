import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import { Modal} from 'react-bootstrap';
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css';
import '../style/web.css';
import { Icon } from 'semantic-ui-react';

class Discussion extends Component{
    constructor(props) {
            super(props)
            this.state = {
              imgFile: null,
              imgSrc: this.props.imgSrc||"",
              renderState: this.props.renderState||"init",
              isPreview: false,
              disabled:this.props.disabled || false
            }
          }
        
          static defaultProps = {
            imgTitle: "",
            height: "200px",
            renderState: "init",
            imgSrc: "",
            titleClass: "",
            accept:"*"
          }
        
          static propTypes = {
            imgTitle: PropTypes.string,
            renderState: PropTypes.oneOf(['init', 'loading', 'upload']),
            imgSrc: PropTypes.string,
            titleClass: PropTypes.string,
            accept:PropTypes.string
          };
        
          componentWillReceiveProps(nextProps){
            if(this.props.imgSrc !== nextProps.imgSrc){
              this.setState({imgSrc:nextProps.imgSrc})
            }
            if(this.props.renderState !== nextProps.renderState){
              this.setState({renderState:nextProps.renderState})
            }
            if(this.props.disabled !== nextProps.disabled){
              this.setState({disabled:nextProps.disabled})
            }  
        
          }
       
          
        
          renderLoading() {//正在上传
            return (
              <div className="img-box" style={{ height: this.props.height }}>
              </div>
            )
          }
        
          renderUpload() {//上传完成
            const imgBox = this.state.disabled ? "img-box-preview-hide" : "img-box-preview-show"
            return (
              <div className={imgBox} style={{ height: this.props.height }}>
                <div className="img-preview">
                  <Icon type="eye-o" className="img-operate" onClick={this.original.bind(this)} />
                  <Icon type="delete" className="img-operate" onClick={this.deleteImg.bind(this)} />
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
              that.setState({ renderState: "upload", imgSrc: this.result })
            }
          }
        
          original() {//原图查看
            this.setState({ isPreview: true })
          }
        
          deleteImg() {//删除图片
            this.setState({ renderState: "init", imgFile: null, isPreview: false, imgSrc: "" })
          }
        
          resetImgSrc(){
            this.setState({ renderState: this.props.renderState, imgFile: null, imgSrc: this.props.imgSrc })
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
<img style={{ width: '50%',  height: '50%' }} src={this.state.imgSrc} />
</div>

            
            <div>
            <input
  type="file"
  id='file'
  accept="image/jpeg, image/gif, image/png, image/bmp"
  className="input-file"
  onChange={e => {
    this.imgChange(e);
  }}
/>
            </div>
    
            <div>
        <Modal visible={this.state.isPreview} footer={null}
          onCancel={this.cancelModal.bind(this)}
          width="auto" wrapClassName="img-center"
          style={{ display: "inline-block" }}
        >
          <img src={this.state.imgSrc} className="preview-all" />
        </Modal>
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
        this.setState({ imgSrc: '' });
      }
      uploadButton(){
        
      }
      
}



  export default Discussion;