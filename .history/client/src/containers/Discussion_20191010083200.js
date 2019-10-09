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
              list: []
            }
          }
        
    componentWillMount(){
      this.getAllimage();
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
          if(response.data==="Success")
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    }

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
            

        return (
     <div> 
       <h1>Discussion Board</h1>
                {this.state.list.map((item, idx) => (
       <div key={idx} className="show">
       <div className="photo">
       <Link to={'/blog/'+item._id} style={{color:'black'}}>
       <Image  src={item.url}/>
       </Link>
       </div>
       <div className="intro">
       <button style={{color:'black'}}>
         Not working
       </button>
       </div>
       </div>
	    ))
          }
            <div><div>
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