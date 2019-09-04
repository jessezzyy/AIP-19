import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Test from '../containers/Test';
import Login from '../containers/Login';
import Signup from '../containers/Signup';


class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <div style={{margin:'20px'}}>
            <Route path="/" exact component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
          </BrowserRouter>
        )
    }
}

export default Router;