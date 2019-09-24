import React,{Component} from 'react';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.Click = this.Click.bind(this);
        this.state = {
            count:'0',
        };
    }
    render() {
        return (
        <div>
          <form className="form-signin">
                <label>Click this button:  </label>
                <button className="btn btn-lg btn-primary btn-block" onClick={this.Click} type="button">Click me!</button>              
                <div>{this.state.count} people have now clicked</div>
            </form>
        </div>
        )
    }
    Click(){
        fetch(`http://127.0.0.1:8081/count`,{  
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => res.json()).then(
            data => 
                this.setState({count: data+1})
        )
    }

}

export default Challenge;   