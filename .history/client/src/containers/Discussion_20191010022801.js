import React,{Component} from 'react';
import {Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import Popup from "reactjs-popup";
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
        
    
    render(){
        const showImage = (
            <>
        <img style={{width: '600px',height: '450px'}} src={this.state.imgSrc} className="preview-all" />
         <Button variant="secondary" onClick={this.deleteImageFile.bind(this)} >
            Close
          </Button>
          <Button variant="primary" onClick={this.upload.bind(this)}>
           Upload
          </Button>
          </>
        );
      
        const uploadImage = (
            
             <div className="upload-plus-text">
             <Icon type="plus" />
             <div className="ant-upload-text">upload</div>
           </div>
            );

            const Modal = (
            <Popup trigger={<button>Trigger</button>} position="right center">
            {close => (
                <div>
              <div>
                <img style={{width: '60%',height: '60%'}} src={this.state.imgSrc} className="preview-all" />
                </div>
                    <div>
                        <Button variant="secondary" onClick={close} >

            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
              </div>
              </div>
            )}
          </Popup>
                
              );
        

        return (
            <div> 
                <div>
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
</div>      
            <div>
                {this.example}
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
          {this.state.imgSrc ? showImage : uploadImage}
         </label>
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
          const typeReg = new RegExp(/^image\/jpg|jpeg|png$/, 'i');
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
      deleteImageFile() {
        this.setState({ imgSrc: '' });
      }

      upload(){
       const formData = new FormData();
        formData.append('myImage',this.state.imgFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('/discussion',formData,config)
          .then(function (response)  {
            window.alert(response.data);
            if(response.data==="Success")
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      
}



  export default Discussion;