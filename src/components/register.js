import React from 'react';
import Axios from 'axios'
import { connect } from "react-redux"
import { AssignUserId  } from "../actions/rootaction";






import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
   KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';


let axiosConfig = {
   headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Accept': 'Token',
      "Access-Control-Allow-Origin": "*",
   }
 };

 const mapStateToProps = (state) => ({ 
   redux: state
 });


 function mapDispatchToProps(dispatch) {
   return {
      AssignUserId: _ifkUserId => dispatch(AssignUserId( _ifkUserId  ))
   };
 }

 class  Register extends React.Component{ 
   state = {
     view_class:"firstview",

      firstname:"",       
       surname :"",  
       middlename:"",  
       nickname :"",  
       gender :"",  
       dateofbirth: new Date("1992-12-14T00:00:00"),   
       email :"",  
       username :"",  
       password :"",  
       confi_password :"",
   }


    onInputChange =(e)=>{
        
         this.setState({[e.target.name]: e.target.value});
      }

      NavigateToNext =( view_class )=>{

         this.setState({view_class});
        console.log({state:this.state})
      }

      CreateUser =(e)=>{

      }

      componentDidUpdate(){   

      }

     componentWillMount(){

     }
      handleDateChange = date => {
             
         console.log({date})

         this.setState({dateofbirth:date});
    };

     RegisterUser =()=>{
        
      var { API_URL, ifkuserId }   = this.props.redux.appStore ;

      var url = API_URL+"api/family/Register";

      Axios.post(url, this.state)
      .then(res => {       

         ifkuserId = res.data.pkuserid;

        this.props.AssignUserId( ifkuserId );

      })
      .catch( error=>{         
         console.log({ error });
         
      })



     }

    render(){
        return <div className = "t-register t-flex t-flex-column">
            
            {
               this.state.view_class==="firstview" ?<React.Fragment>              

               <div className = { `t-flex t-reg-itempair first  ${this.state.view_class} ` }>
                  <label>
                      <span> First name </span>
                      <input name = {"firstname"}  value = { this.state.firstname } onChange = { this.onInputChange } type="text" />
                  </label>
                  <label>
                  <span> Surname </span>
                     <input name = {"surname"} value = { this.state.surname } onChange = {this. onInputChange } type="text" />
                  </label>
               </div>
              
               <div className = { `t-flex t-reg-itempair first  ${this.state.view_class}  ` }>
                  <label>
                      <span> Middle name </span>
                      <input name = {"middlename"} value = { this.state.middlename } onChange = { this.onInputChange } type="text" />
                  </label>
                  <label>
                  <span> Nickname </span>
                     <input name = {"nickname"} value = { this.state.nickname } onChange = {this. onInputChange } type="text" />
                  </label>
               </div>
   
               <div className = { `t-flex t-reg-itempair first  ${this.state.view_class}  ` }>
                  <label>
                      <span> Gender </span>
                     <input  name = {"gender"} value = { this.state.gender } onChange = { this.onInputChange } type="text" />
                  </label>
                  <label>
                  <span>Date of birth </span>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                  placeholder="2018/10/10"
                  value={this.state.dateofbirth}
                  onChange={date => this.handleDateChange(date)}
                  format="yyyy/MM/dd"
                  />
                  </MuiPickersUtilsProvider>

                

                    {/* <input  name = {"dateofbirth"} value = { this.state.dateofbirth } onChange = { this.onInputChange } type="text" />
                */}
                 </label>
               </div>
   
               <div className = { `t-flex t-reg-itempair first ${this.state.view_class}  ` }>
                  <label>
                      <span> username </span>
                     <input name = {"username"}  value = { this.state.username } onChange = { this.onInputChange } type="text" />
                  </label>
                  <label>
                  <span>password </span>
                     <input name = {"password"} value = { this.state.password } onChange = { this.onInputChange } type="text" />
                  </label>
               </div>
              
               <div className = { `t-flex t-reg-itempair first ${this.state.view_class}  ` } >
                  <label style ={{visibility:"hidden"}}>
                      <span> username </span>
                     <input name = {"password"}  type="text" />
                  </label>
                  <label>
                  <span> Confirm password </span>
                     <input name = {"confi_password"} value = { this.state.confi_password } onChange = { this.onInputChange } type="text" />
                  </label>
               </div>
                       
            <br/>
            <br/>
   
             <label style = {{textAlign:"end"}}>
                        <button onClick = { e=> this.RegisterUser() } className = "t-btn t-btn-login"> Register  </button>
              </label>
            
               </React.Fragment>:null
   
            }
            
          
         
            
         
       
        </div>
    }
}


//Register = connect(mapStateToProps)(Register);

export default connect(mapStateToProps, mapDispatchToProps)(Register);

//export default Register ;