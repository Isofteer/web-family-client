import React from 'react';
import Female from '../assets/female.png'
import Male from '../assets/face.png'


export default class  Family extends React.Component{


    render(){
        return <div className = "t-family t-flex  t-flex-x"> 
                
                <div className  ="t-family-section t-flex t-flex-column">
                    <div className = "t-familyItem  t-flex t-flex-x t-f-darker t-f-bolder t-f-mid"> Parents  </div>
                   
                    <div className = "t-familyItem"> 
                        
                         {/*sub item 1 */}
                       <div className = "t-flex t-flex-v t-sub">
                           <div className ="t-sm-img t-flex t-flex-x t-img-round">
                                <img className ="t-img" src = {Male}/>
                            </div>
                            &nbsp;
                        <div className  ="t-f-darker t-f-bolder">Willie Kiprono <br/> Dad </div>
                       </div>

                       {/* sub item 2 */}

                       <div className = "t-flex t-flex-v t-sub">
                           <div className ="t-sm-img t-flex t-flex-x t-img-round">
                                <img className ="t-img" src = {Female}/>
                            </div>
                            &nbsp;
                        <div className  ="t-f-darker t-f-bolder">Willie Kiprono <br/> Mom</div>
                       </div>
                     </div>
                  
                    <div className = "t-familyItem"> Item 1 </div>
                    <div className = "t-familyItem"> Support </div>
                </div>
           </div>
    }
}


