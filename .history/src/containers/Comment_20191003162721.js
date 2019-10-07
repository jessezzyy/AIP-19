import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
//import axios from 'axios';
import '../style/web.css';

class Comment extends Component{
    constructor(props) {
        super(props);
        //this.isLogi = this.isLogin.bind(this);
       // this.isLogin2 = this.isLogin2.bind(this);
        //this.logout = this.logout.bind(this);
       //this.changeContent = this.changeContent.bind(this);
        this.state = { 
            username: ''
         };
         this.openForm = this.openForm.bind(this);
         this.closeForm = this.closeForm.bind(this);
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
            <Link to="/Discussion/" style={{color:'black'}}>
                <div>Discussion</div>
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
                <textarea placeholder="Type Picture.." name="msg" required></textarea>

                <button type="submit" class="btn">Send</button>
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