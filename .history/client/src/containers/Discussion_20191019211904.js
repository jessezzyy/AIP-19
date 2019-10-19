//discussion page
import React,{Component} from 'react';
import {Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import '../style/web.css';
import handleBeforeUpload from '../components/image_upload.js'

class Discussion extends Component{
    constructor(props) {
            super(props)
            this.state = {
              imgFile: null,
              imgSrc: "",
              list: []
            }
          }
    
    // execute when page is loading
    componentWillMount(){
      this.getAllimage();
    }
    
    // file upload is triggered
    onFileChange(e) {
      const file = e.target.files[0];
      if (handleBeforeUpload(file)) {
      this.setState({ imgFile: file}, () => {
          this.handlePreview();
        });
      }
    }
    
    // process image format
    
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
    
    // deal with image upload
    upload(){
      const formData = new FormData();
      formData.append('myImage',this.state.imgFile);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post('/upload',formData,config)
        .then(function (response)  {
          window.alert(response.data);
          // if image is uploaded successfully
          if(response.data==="Success")
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    // read all discussion images from database
    getAllimage(){
      var that = this;
      axios.post('/getAllImg',{
        content: " "
      })
        .then(function (response)  {
          that.setState({list: response.data});
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    render(){
       // preview image
        const showImage = (
            <>
             <img style={{width: '600px',height: '450px'}} src={this.state.imgSrc} className="preview-all" alt="preview" />
             <Button variant="secondary" onClick={this.deleteImageFile.bind(this)} >
               Close
             </Button>
             <Button variant="primary" onClick={this.upload.bind(this)}>
               Upload
             </Button>
            </>
        );
      
        // no image upload
        const uploadImage = (
            
             <div className="upload-plus-text">
               <Icon type="plus" />
               <div className="ant-upload-text">upload new Image</div>
             </div>
            );
            
      // page content
        return (
        <div> 
          <h1>Discussion Board</h1>
              {this.state.list.map((item, idx) => (
                <div key={idx} className="show">
                  <div className="photo">
                    <Link to={'/blog/'+item._id} style={{color:'black'}}>
                      <Image  src={item.url}/>
                    </Link>
                    <div className="intro">
                      <button style={{color:'black'}}>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>))
              }
            <div className="show">
              <div className="photo">
                <h2>Upload your image</h2>
              </div>
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
         </div>
    
        )
      }
}



  export default Discussion;