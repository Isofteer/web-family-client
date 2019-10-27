import React from 'react';
import Female from '../assets/female.png'
import Male from '../assets/face.png'
import Axios from 'axios'
import { connect } from "react-redux"
import { SetParent, GetParent,GetParents, } from "../actions/familyactions";


import AddParent from './addparent'

const mapStateToProps = (state) => ({ 
    redux: state
  });
  

function mapDispatchToProps(dispatch) {
    return {
        GetParents: parents => dispatch(GetParents(parents))
    };
  }

 class  Family extends React.Component{    
    componentDidMount(){     

      var { API_URL, ifkuserId }   = this.props.redux.appStore ; 

        var url = API_URL+"api/family/GetParents";
        
        Axios.get(url, {ifkuserId})
        .then(result=>{      

         let {data} =  result;     

         this.props.GetParents(data);

        })
        .catch(e=>{
            console.log({e});
        })
        

    }

   
    render(){

           var  {parents} = this.props.redux.familyStore;
             console.log({parents});
             
                   return <div className = "t-family t-flex  t-flex-x">                 
                   <div style ={{alignSelf:"stretch",flex:1,backgroundColor:"white"}} className = "t-flex t-flex-x">
                    
                     <AddParent />

                   </div>              



                <div className  ="t-family-section t-flex t-flex-column">                
                    <div className = "t-familyItem  t-flex t-flex-x t-f-darker t-f-bolder t-f-mid"> Parents  </div>
                   
                    <div className = "t-familyItem">                                              
                      
                        {
                            parents.map((parent,index )=> 
                                    <div key ={ `key-${ index }` } className = "t-flex t-flex-v t-sub">
                                        <div className ="t-sm-img t-flex t-flex-x t-img-round">
                                        <img className ="t-img" src = {Female}/>
                                    </div>
                                       &nbsp;
                                        <div className  ="t-f-darker t-f-bolder">  {  `${ parent.firstname }  ${ parent.surname }`   }` 
                                         <br/> { parent.gender==="male"? "Dad":"Mom" }</div>
                                    </div>
                       )
                        }


                       <div className = "t-flex t-flex-v t-sub">                         
                         <button> Add Parent </button>
                       </div>
                     </div>
                  


                     <div className = "t-familyItem  t-flex t-flex-x t-f-darker t-f-bolder t-f-mid"> Children  </div>
                   
                   
                </div>
           
           
           </div>
    }
}


Family = connect(mapStateToProps)(Family);

Family = connect(null, mapDispatchToProps)(Family);

export default Family
