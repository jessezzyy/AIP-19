import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../style/web.css';

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
             if(response.data==="Success")
             window.location.reload();
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
        return (
            <div>

            <div class="container"><Image   rounded src={require('../img/ww.jpeg')}/></div>

            <div class="container">
                <Image alt="Avatar"  rounded src={require('../img/qq.jpeg')} />
                <p>Hello.How are you today?</p>
                <span class="time-right">11:00</span>
            </div>

            <div class="container darker">
                <Image  rounded src={require('../img/ww.jpeg')} alt="Avater" class="right"/>
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-right">11:02</span>
            </div>

            <button class="open-button" onClick={this.openForm}>Reply</button>

            <div class="chat-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                <h1>Reply</h1>

                <label for="msg"><b>Picture</b></label>
                <input
            type="file"
            id='file'
            accept="image/png, image/jpg"
            className="input-file"
            onChange={e => {
              this.onFileChange(e);
              }}
            />
                <button type="submit" onClick={this.upload.bind(this)} class="btn">Send</button>
                <button type="button" class="btn cancel" onClick={this.closeForm}>Close</button>
                </form>
            </div>
         
        </div>
    
    
        )
      }
      openForm(){
          document.getElementById("myForm").style.display = "block";
      }

      closeForm(){
          document.getElementById("myForm").style.display = "none";
      }

  
}



  export default Comment;