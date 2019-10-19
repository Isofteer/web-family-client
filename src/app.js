import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from "react-redux"
import store from './store/store'
import { addArticle } from './actions/rootaction';
import List from './components/List'
import LeftPanel from './components/leftpanel'
import Login from './components/login'
import Family from './components/Family'

import './css/global.css'

import './css/size640.css'
import './css/size768.css'
import './css/size1024.css'
import './css/size1200.css'

import {NAV_DASHBOARD,NAV_FAMILY} from './constants/action-types'

const mapStateToProps = (state) => ({ 
  redux: state
});


class  App extends React.Component{


componentDidUpdate (){
  console.log({reduxstate:store.getState()});
  
}

    render(){

   var { active_page }   = this.props.redux.appStore ;  

   console.log({active_page})
     
        return <div className = "t-container t-flex  t-flex-x"> 


          {/* <Login/> */}
         
          <div className = 't-app-wrapper t-flex'>
           <LeftPanel/>
            {
              active_page===NAV_DASHBOARD ? <div> NAV_DASHBOARD</div>:null
            }

           {
            active_page===NAV_FAMILY ? <Family/>:null
          }
          </div>
           </div>
    }
}


App = connect(mapStateToProps)(App);

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)