//comment page
import React,{Component} from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../style/web.css';

class Comment extends Component{
    constructor(props) {
        super(props);
        this.state = {
        imgFile: null,
        imgSrc: "",
        list: []
      }
         this.openForm = this.openForm.bind(this);
         this.closeForm = this.closeForm.bind(this);
         this.upload = this.upload.bind(this);
    }

    // deal with replied image upload
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
     
      // file upload is triggered
      onFileChange(e) {
        const file = e.target.files[0];
        if (this.handleBeforeUpload(file)) {
            this.setState({ imgFile: file}, () => {
            this.handlePreview();
          });
        }
      }
      
      // preview uploaded image
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
      
     // preview uploaded image
      handlePreview() {
        const that = this;
        const file = this.state.imgFile;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          that.setState({imgSrc: this.result })
        }
      }

      // delete image in upload box
      deleteImageFile() {
        this.setState({ imgSrc: '' });
      }
      

      openForm(){
          document.getElementById("myForm").style.display = "block";
      }

      closeForm(){
          document.getElementById("myForm").style.display = "none";
      }

    render(){
      // preview image
        const showImage = (
          <>
           <img style={{width: '300px',height: '300px'}} src={this.state.imgSrc} className="preview-all" alt="preview"/>
           <button type="submit" onClick={this.upload.bind(this)} class="btn">Send</button>
          </>
        );
        
        // no image upload
        const uploadImage = (
            
             <div className="upload-plus-text">
             <Icon type="plus" />
             <div className="ant-upload-text">upload</div>
           </div>
            );

       // page content
        return (
            <div>

              <div className="container">
                <Image   rounded src={require('../img/test.jpeg')}/>
              </div>

            <button className="open-button" onClick={this.openForm}>Reply</button>
              
            <div className="chat-popup" id="myForm">
                <form className="form-container">
                  <h1>Reply</h1>

                  <label htmlFor="msg"><b>Picture</b></label>
                  <input type="file" id='file' accept="image/png, image/jpg"
                     className="input-file"  onChange={e => {
                          this.onFileChange(e);
                      }}
                   />
                  <label htmlFor="file" className="ant-upload">  
                    {this.state.imgSrc ? showImage : uploadImage}
                  </label>
                  <button type="button" class="btn cancel" onClick={this.closeForm}>Close</button>
                </form>
                
             </div>
            
            </div>
    
    
        )
      }

  
}



  export default Comment;