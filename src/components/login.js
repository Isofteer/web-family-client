import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Register from '../components/register'

import logo from '../assets/logo.png';

console.log(logo);

class Login extends React.Component {    

state = {
  view:"signup"
}


handleViewViewChange =(e)=>{
  
  if(e.target.id ==="signIn-view")
     this.setState({view:"login"})
  else
     this.setState({view:"signup"})
}
  render(){
      
  const { width } = this.props;
    return (
        <div className={'t-login t-flex t-flex-x'}>
          <div className='t-login-holder t-flex t-flex-column '>
                    <div style = {{textAlign:"center"}}>
                    <img src ={ logo}/>
                    </div>
             
                   <div className ="t-flex t-login-views">
                     <input   onChange ={this.handleViewViewChange}  id="signIn-view" type="radio" name="t-login-view"/>
                      <label  htmlFor = "signIn-view" > SIGN IN
                      <div className="glow">  </div>
                      </label>

                      <input defaultChecked onChange ={this.handleViewViewChange} id="signUp-view" type="radio" name="t-login-view"/>
                      <label htmlFor = "signUp-view" > SIGN UP
                                         
                      <div className="glow">  </div>
                      </label>
                   </div>
           {this.state.view ==="login"?
              <div className ="t-flex t-flex-column ">
                  <label className ="lbl-login">
                      <span > USERNAME  </span>
                      <input type="email"/>
                  </label>

                  <label className ="lbl-login">
                      <span > PASSSWORD </span>
                      <input type="password"  />
                  </label>
                  <br/>
                  <div>

                  <FormControlLabel
                              value="top"
                              control={<Checkbox     inputProps={{
                                'aria-label': 'primary checkbox',
                                }} value="checkedA" color="primary" />}
                              label="KEEP ME SIGNED IN"
                              labelPlacement="end"
                  />
              
                  </div>

                  <br/>
                  <label style = {{textAlign:"end"}}>
                     <button className = "t-btn t-btn-login"> Sign In </button>
                  </label>
                  <br/>
                  <br/>                 
                  <br/>
                  
              </div>
              :               
               <Register/>
              }
          </div>
        
        </div>
      );
  }
}

Login.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Login);
