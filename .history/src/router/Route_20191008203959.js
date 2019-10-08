import React,{Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Discussion from '../containers/Discussion';
import Test from '../containers/Test';
import Comment from '../containers/Comment';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Honorroll from '../containers/Honorroll';
import Navigation from '../containers/Navigation';


class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route path='/' component={Navigation}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/test" component={Test} /> 
            <Route path="/discussion" component={Discussion} /> 
            <Route path="/comment" component={Comment} />
            <Route path="/honorroll" component={Honorroll} />
            <Route path="/home" component={Home}/>
            <Route path="/home/:username" component={Home} />

          </BrowserRouter>
        )
    }
}

export default Router;