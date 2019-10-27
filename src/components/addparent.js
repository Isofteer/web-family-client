import React from 'react'
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';

import { connect } from "react-redux"

import SearchUser from './search'

import { SetParent, GetParent,GetParents, } from "../actions/familyactions";

const mapStateToProps = (state) => ({ 
    redux: state
  });
 
 
  function mapDispatchToProps(dispatch) {
    return {
       AssignUserId: _ifkUserId => dispatch(AssignUserId( _ifkUserId  ))
    };
  }

class AddParent extends React.Component{
    
  state = {
    users:[]
  }
    
     handleSearchUser= ( value )=>{


     }


    render(){
        return <div>
            
            <SearchUser />
            
             </div>
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddParent);