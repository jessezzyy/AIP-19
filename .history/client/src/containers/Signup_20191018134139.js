import React,{Component} from 'react';
import axios from 'axios';


class Signup extends Component{
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      user:'',
      password:''
    };
  }
  
    signUp(){
      var that = this;
      axios.post('/signup', {
        user: this.state.user,
        password: this.state.password
      })
      .then(function (response) {
      console.log(response);
      window.alert(response.data);
      if(response.data==='Success')
        that.props.history.push('/user/'+that.state.user)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    handleUserChange(e){
        this.setState({user:e.target.value})
    }   
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    render() {
        return (
          <div>
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign up</h2>
              <label for="inputUser" className="sr-only">Username</label>
              <input type="username" onChange={this.handleUserChange} id="inputUser" className="form-control" placeholder="Username"/>
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password"/>
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
            </form>
          </div>
        )
    }
  }

  export default Signup;