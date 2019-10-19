//Log in page
import React,{Component} from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            user:'',
          password:''
        };
    }
    
    //deal with User log in
    submit(){
        var that = this;
        //request to check if username and password matched and existed
        axios.post('/login', {
            user: this.state.user,
            password: this.state.password
          })
          .then(function (response)  {
            window.alert(response.data);
            // username and password matched and existed
            if(response.data==="Success")
              that.props.history.push('/user/'+that.state.user);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    // username input
    handleUserChange(e){
        this.setState({user:e.target.value})
    }

     // password input
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    
    // link to sign up page
    handleClick(event){
        this.props.history.push('/signup');
    }
    
    // page content
    render() {
        return (
          <div>
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputUser" className="sr-only">Username</label>
                <input type="Username" onChange={this.handleUserChange} id="inputUser" className="form-control" placeholder="Username"/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password"/>
                <button className="btn btn-lg btn-primary btn-block" onClick={this.submit} type="button">Log in</button>              
            </form>
            <div>
                <Link to="/signup">Sign up</Link>
            </div>
          </div>
        )
    }
    
}


export default Login;   