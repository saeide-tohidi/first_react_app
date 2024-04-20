import { Component } from "react";


class Counter extends Component {
    static defaultProps = {
        count: 150
    }

    constructor(){
        super();

        this.state = {
            name: "Saeide",
          
        }

        // this.changeName = this.changeName.bind(this);
    }

    // changeName() {
    //     this.setState({name: "Ali"})
    // }

    changeName = ()=> {
        this.setState({name: "Ali"})
    }


    render(){

        return (
            <div>
                <h5>Name: {this.state.name}</h5>
                <p>{new Date().toLocaleTimeString()}</p>

                <button onClick={this.changeName}>Change name</button>
            </div>
    )
    }
}



export default Counter;