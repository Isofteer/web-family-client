


import React, { Fragment } from 'react'


 const  SelectItem = ( items )=><ul>
        {
           items.map((item,i)=>
             <li key ={item.id}>{item.value}</li>
           )
        }
 </ul>

export default class Select extends React.Component{

       state = {
           isItemSelected:false,

       }

       selectClicked = ( e  )=>{
           let isItemSelected = e.target.checked;
           alert(  isItemSelected?"checked":"unchecked");
           this.setState({isItemSelected})
       }
    render (){
        var { items } = this.props; 

        return <label htmlFor ="selectcheck" >
                   <div className = "t-flex ">
                        
                   </div>
                  {
                      this.state.isItemSelected?
                      <Fragment>
                      { SelectItem(items)}
                    </Fragment>:
                    null
                  }
                  
                 
         <input onChange = {this.selectClicked} id="selectcheck" style = {{display:"none"}} type="checkbox"></input>
        </label>
    }
}