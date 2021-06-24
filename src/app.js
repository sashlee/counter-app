import React from "react";
import 'antd/dist/antd.css';
import {  Button } from "antd";


export default class Counter extends React.Component {
  constructor (props) {
    super (props)
  

    this.state = {
      counter: 0,
      initializing: true
    }

    this.increment = () => this.setState({counter: this.state.counter+1})
    this.decrement = () => this.setState({counter: this.state.counter-1})
  }
  componentDidMount (){
  console.log ('Component Did Mount')
  setTimeout(() => {
    this.setState({initializing: false})
  }, 1000); 
}

componentDidUpdate(prevProps, prevState, snapshot){
  console.log ('ComponentDidUpdate')
}

componentWillUnmount(){
  console.log ('ComponentWillUnmount')
}
render () {

  if (this.state.initializing) {
    return <div>Initializing...</div>
  }
  console.log ('Render')
  return (
   
  <div>
                    <Button style={{ marginRight: 20, width: '15%' }}type="primary" onClick={this.increment}>Increment</Button>
                <Button type="danger" style={{  width: '15%' }} onClick={this.decrement}>Decrement</Button>                
              
          
          <div className="counter" style={{ marginTop: 30 }}>
            Counter : {this.state.counter}
          </div> 
  </div>
              
               
        
 
  );
} 
}
