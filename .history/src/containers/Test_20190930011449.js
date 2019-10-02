import React,{Component,Fragment} from 'react';
import axios from 'axios';


class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'wogun',
            list:[]
        }
    

    }
    render(){
        return(
            <div>
                <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addList.bind(this)}>add</button>
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

     componentDidMount(){
         var users = [];
        axios.get('/test')
        .then(function (response)  {
           users = response;
            console.log(users);
        });
        this.setState({
            list: users
        });
      }
}

export default Test