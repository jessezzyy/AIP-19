import React,{Component,Fragment} from 'react';
import { exportDefaultDeclaration } from '@babel/types';

class Xiaojj extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'wogun',
            list:['按摩','牛角']
        }

    }
    render(){
        return(
            <div>
                <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                          return <li>{item}</li>
                        })
                    }
                </ul>
                <div>
         <button onClick={this.handleClick.bind(this)}>click me!</button>
     </div>
         
       

                </Fragment>
            </div>
        )
    }

    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    addList(){
           this.setState({
               list:[...this.state.list,this.state.inputValue]
           })
    }

    handleClick(event){
        this.props.history.push('/app');
      }
}

export default Xiaojj