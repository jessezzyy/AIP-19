import React,{Component,Fragment} from 'react';
import axios from 'axios';


class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getList();
      }
    
      // Retrieves the list of items from the Express app
      getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => this.setState({ list }))
      }

    render(){
        const { list } = this.state;
        return(
            <div>
                <Fragment>
                    <h1>Users Rank</h1>
                <ul>
                {list.map((item) => {
              return(
                <li>
                  {item}
                </li>
              );
            })}
                   
                </ul>
                <div>
     </div>
         
       

                </Fragment>

            </div>
        )
    }


    
}

export default Test