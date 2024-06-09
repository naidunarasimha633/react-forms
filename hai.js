
import React,{Component} from 'react';

class Hai extends Component{
  constructor(props){
    super(props)
    this.state={
      x:this.props.data+10,
      product:"dummy"
    }
    console.log("inside constuctoe")
  }
  static getDerivedStateFromProps(props,state){
    console.log("inside get derived from props")
    return  {
        x:props.data+10
    }
  }
  componentDidMount(){
    console.log("insidedid mountcomponent")
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                this.setState({...this.state,product:json.title})
            })
  }
  shouldComponentUpdate(){
    return true;
  }
  getSnapshotBeforeUpdate(pervprops,prevstate){
    console.log("inside snapshot")
    return null
  }
  componentDidUpdate(){
    console.log("inside update component")
  }
  componentWillUnmount(){
    console.log("unmounting...")
  }
  render(){
    console.log("inside render component")

    return (
  <>
  <h1> this is child component</h1>
  <h1>x values:{this.state.x}</h1>
  <h1>props value:{this.props.data}</h1>
  <h1>{this.state.product}</h1>
  

  </>
    )
}
}
export default Hai;