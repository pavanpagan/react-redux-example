import React, { Component } from 'react';
import '../../App.css';
import {connect} from "react-redux";
import { Icon } from "react-icons-kit";
import {plusCircle} from 'react-icons-kit/fa/plusCircle';
import {Link} from 'react-router-dom';

import HelloWorld from "./lable";
import {backward} from 'react-icons-kit/icomoon/backward'
class TestPage extends Component {
 render()
 {
    return(
      <div className="App">
         <Icon className="addEmployee" 
          onClick={this.props.do}
           icon={plusCircle} 
          />
        <HelloWorld age={this.props.age}/>
        <Link  to={{pathname:'/'}} >
            <Icon className="addEmployee" 
              icon={backward} 
              />
          </Link>
      </div>
    );
  }
}

const getDefaultState=(state)=>{
    return{
      age:state.age
     }
}

const operation=(dispatch)=>{
    return{
        do:()=>dispatch({type:'DO'}),
     }
}

export default connect(getDefaultState,operation)(TestPage);