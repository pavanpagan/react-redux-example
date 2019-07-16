import React, { Component} from 'react';
//import logo from '../../logo.svg';
import '../../App.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Icon } from "react-icons-kit";
import {plusCircle} from 'react-icons-kit/fa/plusCircle';
import {minusCircle} from 'react-icons-kit/fa/minusCircle';
import {home} from 'react-icons-kit/icomoon/home'
class Home extends Component {
/*constructor(props)
{
  super(props);
}*/

 render() 
 {
    return (
      <div className="App">
      <div className="counter">
           <Icon className="addEmployee" 
           onClick={this.props.onAgeDown}
           icon={minusCircle} 
          />
           Counter:{this.props.age}
          <Icon className="addEmployee" 
           onClick={this.props.onAgeUp} 
          icon={plusCircle} 
          />
          </div>
          <Link  to={{pathname:'/home'}} >
          <Icon className="addEmployee" 
            icon={home} 
            />
          </Link>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log("state came",state);
  return{
    age:state.age
   }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
       onAgeUp:()=>dispatch({type:'AGE_UP'}),
       onAgeDown:()=>dispatch({type:'AGE_DOWN'}),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Home);