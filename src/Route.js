import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Xiaojj from './Xiaojj';
import App from './App';


class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
            <Route path="/" exact component={Xiaojj} />
            <Route path="/app" component={App} />
          </div>
          </BrowserRouter>
        )
    }
}

export default Router;