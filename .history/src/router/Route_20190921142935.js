import React,{Component} from 'react';
import { BrowserRouter, Route, hashHistory} from 'react-router-dom';
import Home from '../containers/Home';
import Test from '../containers/Test';
import Login from '../containers/Login';
import Signup from '../containers/Signup';


class Router extends Component{
    render(){
        return(
            <BrowserRouter history={hashHistory}>
            <div style={{margin:'20px'}}>
            <Route path="/:username" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/test" component={Test} />
          </div>
          </BrowserRouter>
        )
    }
}

export default Router;