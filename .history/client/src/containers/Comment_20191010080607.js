import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../style/web.css';
import { Icon } from 'semantic-ui-react';


class Comment extends Component{
    constructor(props) {
        super(props);
        //this.isLogi = this.isLogin.bind(this);
       // this.isLogin2 = this.isLogin2.bind(this);
        //this.logout = this.logout.bind(this);
       //this.changeContent = this.changeContent.bind(this);
       this.state = {
        imgFile: null,
        imgSrc: "",
        list: []
      }
         this.openForm = this.openForm.bind(this);
         this.closeForm = this.closeForm.bind(this);
         this.upload = this.upload.bind(this);
    }

    upload(){
        const formData = new FormData();
         formData.append('myImage',this.state.imgFile);
         const config = {
             headers: {
                 'content-type': 'multipart/form-data'
             }
         };
         axios.post('/reply',formData,config)
           .then(function (response)  {
             window.alert(response.data);
             
           })
           .catch(function (error) {
             console.log(error);
           });
       }

       onFileChange(e) {
        const file = e.target.files[0];
        if (this.handleBeforeUpload(file)) {
        this.setState({ imgFile: file}, () => {
            this.handlePreview();
          });
        }
      }

      handleBeforeUpload(file) {
        const IMAGE_MAX_SIZE = 1024 * 1024;
        if (file) {
          const sizeOk = file.size < IMAGE_MAX_SIZE;
          const typeReg = new RegExp(/^image\/jpg|jpeg|png$/, 'i');
          const typeOk = typeReg.test(file.type);
    
          if (!typeOk) {
           window.alert('Only accept jpg or png');
          } else if (!sizeOk) {
            window.alert('Maxsize is 1024 x 1024');
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
  
      deleteImageFile() {
        this.setState({ imgSrc: '' });
      }

    render(){
        const showImage = (
            <>
        <img style={{width: '300px',height: '300px'}} src={this.state.imgSrc} className="preview-all" />
        <button type="submit" onClick={this.upload.bind(this)} class="btn">Send</button>
          </>
        );
      
        const uploadImage = (
            
             <div className="upload-plus-text">
             <Icon type="plus" />
             <div className="ant-upload-text">upload</div>
           </div>
            );

        return (
            <div>

            <div className="container"><Image   rounded src={require('../img/ww.jpeg')}/></div>

            <div className="container">
                <Image alt="Avatar"  rounded src={require('../img/qq.jpeg')} />
                <span className="time-right">11:00</span>
            </div>

            <div className="container darker">
                <Image  src={require('../img/ww.jpeg')} alt="Avater" class="right"/>
                <span className="time-right">11:02</span>
            </div>

            <button className="open-button" onClick={this.openForm}>Reply</button>
              
            
                <input
            type="file"
            id='file'
            accept="image/png, image/jpg"
            className="input-file"
            onChange={e => {
              this.onFileChange(e);
              }}
            />
            <label htmlFor="file" className="ant-upload">  
          {this.state.imgSrc ? showImage : uploadImage}
         </label>
               
           
            
        </div>
    
    
        )
      }
     

  
}



  export default Comment;