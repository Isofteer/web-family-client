import React from 'react';



export default class  Register extends React.Component{



    render(){
        return <div className = "t-register t-flex t-flex-column">
            <div className = "t-flex t-reg-itempair">
               <label>
                   <span> First Name </span>
                  <input type="text" />
               </label>
               <label>
               <span> Surname </span>
                  <input type="text" />
               </label>
            </div>


            <div className = "t-flex t-reg-itempair">
               <label>
                   <span> Date of birth </span>
                  <input type="text" />
               </label>
               <label>
               <span> Contact No. </span>
                  <input type="text" />
               </label>
            </div>


            <div className = "t-flex t-reg-itempair">
               <label>
                   <span> Address  </span>
                  <input type="text" />
               </label>
               <label>
               <span> T </span>
                  <input type="text" />
               </label>
            </div>


            <div className = "t-flex t-reg-itempair">
               <label>
                   <span> First Name </span>
                  <input type="text" />
               </label>
               <label>
               <span> Surname </span>
                  <input type="text" />
               </label>
            </div>
       
         <br/>
         <br/>

            <label style = {{textAlign:"end"}}>
                     <button className = "t-btn t-btn-login"> Next  </button>
                  </label>
         
       
        </div>
    }
}