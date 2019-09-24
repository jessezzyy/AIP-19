import React,{Component} from 'react';
import axios from 'axios';


class Signup extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      name:'',
      user:'',
      password:''
    };
}

    render() {
        return (
          <div>
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign up</h2>
              <label for="inputName" className="sr-only">Name</label>
              <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" />
              <label for="inputUser" className="sr-only">Username</label>
              <input type="username" onChange={this.handleUserChange} id="inputUser" className="form-control" placeholder="Username"/>
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password"/>
  
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
            </form>
          </div>
  
        )
      }

      signUp(){
        axios.post('/signup', {
          name: this.state.name,
          user: this.state.user,
          password: this.state.password
        })
        .then(function (response) {
          window.alert(response.data);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }


      handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handleUserChange(e){
        this.setState({user:e.target.value})
    }   
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
  }

  export default Signup;