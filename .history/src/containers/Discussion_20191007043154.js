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
        
    
    render(){
        const imagePreview = (
           
                    <button
                      type="delete"
                      className="icon-btn"
                      onClick={this.swapImageFile}
                    />
                 
        );
      
        const uploadImage = (
            
             <div className="upload-plus-text">
             <Icon type="plus" />
             <div className="ant-upload-text">upload</div>
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
                
                {this.example}
          
  </div>


     
                   
        </div>
    
    
        )
      }
      example(){
    
            const [show, setShow] = React.useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          
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