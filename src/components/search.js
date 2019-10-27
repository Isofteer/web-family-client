import React from 'react'
import Search from '@material-ui/icons/Search';
import Filter from '@material-ui/icons/FilterRounded';
import { connect } from "react-redux"
import Axios from 'axios'
import {Slider,FormControl,InputLabel,Select,MenuItem,Grid} from '@material-ui/core';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';



const mapStateToProps = (state) => ({ 
  redux: state
});


function mapDispatchToProps(dispatch) {
  return {
     AssignUserId: _ifkUserId => dispatch(AssignUserId( _ifkUserId  ))
  };
}


class SearchUser  extends  React.Component{
    ages = [
        {
          value: 0,
          label: '',
        },
        {
          value: 20,
          label: '',
        },
        {
          value: 37,
          label: '',
        },
        {
          value: 120,
          label: '',
        },
      ];
      
    state = {
        agerange:[1, 20],
        gender:0,
        searchstr:"",
        datefilteractive:false,
        resultUsers:[],
        isfilteruivisible:false,
        ismainbtnsearchvisiable:true
    }

    componentDidUpdate(){
      console.log(this.state);
    }
    
    handleOnClickSearcUser= ( )=>{
  
      
      let {searchstr  , gender,agerange,datefilteractive}  = this.state;   
      
      var { API_URL }   = this.props.redux.appStore ; 

      var url = API_URL+"api/family/FindUser";

      Axios.post(url,{  searchstr , gender,agerange, datefilteractive})
      .then( result =>{          
        var {data}  = result;

          this.setState({resultUsers:data.resultUsers,isfilteruivisible:false,ismainbtnsearchvisiable:false});          
           


      })
      .catch(error=>{
           console.log( {error});
      })
    }
     handleSliderChange = (event, agerange) => {
        this.setState({agerange,datefilteractive:true});
      
      };
    valuetext =(value) => {
    return `${this.state.agerange}°C`;
    }

   
    handleSelectChange=( e )=>{         

      var gender=  e.target.value;    

      this.setState({ gender });
      
    }
      handleFilterUiToggle =()=>{

      this.setState({["isfilteruivisible"]:!this.state.isfilteruivisible})

    }

    handleSearchUser=( e )=>{
      this.setState({"searchstr":e.target.value,ismainbtnsearchvisiable:true,isfilteruivisible:false});
    }
    render(){    
             var   users =   this.state.resultUsers; 
             console.log({users})


             console.log( !users.length)

        return <div style ={{minWidth:400}} className="t-flex t-flex-column">
              <div>
                  <h1> Find & add your parents </h1>
              </div>
              <br/>
              <br/>
              {/* style={{display:"none"}} */}
             <div  className ={`t-flex t-flex-row t-flex-h t-main-search`}>
                 <Search/>
                <input onFocus ={this.handleSearchUser}  placeholder ="Username or Contact " onChange = {this.handleSearchUser} type="text"/> 
                         
            </div>
              <br/>
              <br/>   
              <div className = "t-flex t-flex-column t-flex-h  t-search-user-fliler">
                 <div style={{alignItems:"stretch"}} className = "t-flex t-flex-v  ">
                    Apply filters 
                    <Filter onClick = { this.handleFilterUiToggle } style= {{marginLeft:"auto"}}/>
                 </div>              

                 <div style={{position:"relative"}}>
                 
                 {
                   this.state.isfilteruivisible?
                   <div className ="t-flex t-flex-column t-user-filter-flatter">
                     <Grid
                      spacing={2}
                     container 
                     alignContent ="center"
                     children = "div"
                     md ={12}
                     >
                      <Grid md = { 6 } item >                         
                       <span style={{width:300}}>
                           <h3>
                              Age filter
                           </h3>
                       <Slider
                            value={this.state.agerange }
                            onChange={this.handleSliderChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={this.valuetext}
                            marks={this.ages}
                        />
                       </span>
                         
                      </Grid>

                      <Grid md = { 6 } item >
                        <FormControl  className = {'t-select'}>
                           <InputLabel htmlFor="gender"> Gender </InputLabel>
                        <Select
                          value={this.state.gender}
                          onChange={this.handleSelectChange}
                          inputProps={{
                          name: 'gender',
                          id: 'gender',
                        }}
                        >
                        <MenuItem value={ 0 }>all</MenuItem>
                        <MenuItem value={ "male" }>male</MenuItem>
                        <MenuItem value={ "female" }>female</MenuItem>
                        </Select>
                        </FormControl>
                      </Grid>


                     </Grid>
                 
                     <div style ={{width:100,marginLeft:"auto"}} onClick = {this.handleOnClickSearcUser} className ="t-btn t-flex t-flex-x "> <Search/>    Apply Filters </div>            
                    </div>
                :null 
                }
               
               
                 </div>
              </div>
              <br/>
              <br/>  
              <ul className = "t-flex t-flex-column  t-user-search-result">
              <TransitionGroup className="todo-list">

             
                    { users.map((user,index )=> (
                                    <CSSTransition
                                      key={ index }
                                      timeout={500}
                                      classNames="item"
                                    >
                        <li key={index} className="t-flex t-flex-v">
                          <span className="t-sm-img t-img-round t-sub t-search-item"> <img className="t-img" src="e80cb8cede5165edd7cae7c435efebd3.png" /></span>
                          <div className="t-flex t-flex-column t-sub">
                            <span className="t-f-bolder">{user.firstname}  &nbsp; {user.surname}  </span>
                            <span className="t-bold"> Kericho </span>
                          </div>
                        </li>
                                    </CSSTransition>
                    ))}
        </TransitionGroup>
             
             </ul>
              <br/>
              <br/>   
              {
                this.state.ismainbtnsearchvisiable?
                <div onClick = {this.handleOnClickSearcUser} className ="t-btn t-flex t-flex-x"> <Search/>    find user now </div>            
                  :null
              }
              
           
        </div>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);