
import React,{Component} from 'react';
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time:props.mulai
        };
    }

    componentDidMount(){
        this.add=setInterval( ()=>this.tambah(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.add);
    }

    tambah =() =>{
        this.setState({
            time:parseInt(this.state.time)+1
        })
    }
    render(){
        console.log(this.state.time);
        return(
            <h1>{this.state.time}</h1>
        )
    }
}

export default Timer;
