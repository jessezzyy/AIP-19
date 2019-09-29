import React,{Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Discussion from '../containers/Discussion';
import Test from '../containers/Test';
import Comment from '../containers/Comment';
import Login from '../containers/Login';
import Signup from '../containers/Signup';


class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <div style={{margin:'20px'}}>
            <Route path='/' exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/test" component={Test} /> 
            <Route path="/Discussion" component={Discussion} /> 
            <Route path="/Comment" component={Comment} />
            <Route path="/Home" component={Home} />
            <Route path="/user/:username" component={Home} />
          </div>
          </BrowserRouter>
        )
    }
}

export default Router;