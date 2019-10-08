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
          var that = this;
        axios('/api/getList')
        .catch(error => console.log('error', error))
        .then(response => console.log(response));
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