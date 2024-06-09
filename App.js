import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Hai from './hai';
class App extends Component{
  
  constructor(){
    super()
    this.state={
      count:10,
      show:true
    }
  }

  render(){

    return (
   <>
   {this.state.show? <Hai data={this.state.count} />:"ok"}
   <h1>hai good night to everyone</h1>
   <h1>parent component:{this.state.count}</h1>
   <button onClick={()=>{this.setState({count:this.state.count+10})}}>click</button>
   <button onClick={()=>{this.setState({show:false})}}>hide</button>
   <button onClick={()=>{this.setState({show:true})}}>show</button>
  <Hai data={this.state.count} />
  <h1 className='text-primary'>react is good and easy to learn but takes some time</h1>
   </>
    )
}
}
export default App;
