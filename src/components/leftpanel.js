import  React from 'react'
import { connect } from "react-redux"
import { switchPage } from "../actions/navigation";
import store from '../store/store'


// icons

import logo from '../assets/logo.png';
import HomeIcon from '@material-ui/icons/Home';
import FamilydIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ProfileIcon from '@material-ui/icons/Person';

import SupportIcon from '@material-ui/icons/Help/';
import SettingIcon from '@material-ui/icons/Settings';


function mapDispatchToProps(dispatch) {
    return {
        switchPage: article => dispatch(switchPage(article))
    };
  }
  
 class LeftPanel  extends React.Component{

 
     handleChangeView = (e)=>  {
         
       this.props.switchPage( e.target.id);   


       console.log(e.target.checked)
      
    }
    
    render(){
        return <div className = "t-left-section">  
        <div>
          <img src ={ logo}/>
        </div>
         <ul  className = "t-flex t-flex-column t-mainApp-nav">
           

             <li> 
                <input name="main-nav"  style ={{display:"none"}} onClick ={this.handleChangeView } type ="radio" id="NAV_DASHBOARD" value ="dashboard"/>
                <span className ="glow" ></span>  
                <label htmlFor="NAV_DASHBOARD"> 
                    <div>
                    <DashboardIcon/>  &nbsp;  
                    <span> Dashboard</span>
                    </div>
                  </label>                             
               </li>
           


             <li> 
                <input name="main-nav"  style ={{display:"none"}} onClick ={this.handleChangeView } type ="radio" id="NAV_FAMILY" value ="family"/>
                <span className ="glow" ></span>  
                <label htmlFor="NAV_FAMILY"> 
                    <div>
                    <FamilydIcon/>  &nbsp;  
                    <span> Family</span>
                    </div>
                  </label>                             
               </li>
           



             <li> 
                <input name="main-nav"  style ={{display:"none"}} onClick ={this.handleChangeView } type ="radio" id="NAV_SUPPORT" value ="support"/>
                <span className ="glow" ></span>  
                <label htmlFor="NAV_SUPPORT"> 
                    <div>
                    <SupportIcon/>  &nbsp;  
                    <span> Support</span>
                    </div>
                  </label>                             
               </li>
           
           
            <li> 
                <input  name="main-nav" style ={{display:"none"}} onClick ={this.handleChangeView } type ="radio" id="NAV_PROFILE" value ="profilrt"/>
                <span className ="glow" ></span>  
                <label htmlFor="NAV_PROFILE"> 
                    <div>
                    <ProfileIcon/>  &nbsp;  
                    <span> Profile</span>
                    </div>
                  </label>                             
               </li>

             <li> 
             <input  name="main-nav" style ={{display:"none"}} onClick ={this.handleChangeView } type ="radio" id="NAV_SETTINGS" value ="profilrt"/>
               <span className ="glow" ></span>    
                <label htmlFor="NAV_SETTINGS"> 
                    <div>
                    <SettingIcon/>  &nbsp;  
                    <span> Settings</span>
                    </div>
                  </label>                             
               </li>
         </ul>

        </div>
    }
 
}
export default connect(null, mapDispatchToProps)(LeftPanel);
