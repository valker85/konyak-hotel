import React from 'react'
import './App.css'
import './assets/css/media.css'


import { Route, withRouter } from 'react-router-dom'


import routes from './routes'
import Header from './components/other-components/header'
import Footer from './components/other-components/footer'


class App extends React.Component {

  componentWillReceiveProps(nextProps){
    if(nextProps.location.pathname !== this.props.location.pathname){
      window.scrollTo(0, 0)
    }
  }


  render(){
    return (
      <>
        <Header/>
        {
          routes.map((route, i)=>{
            return(
              <Route key={i} path={route.path} exact={route.exact} component={route.component}/>
            )
          })
        }
        <Footer/>
      </>
    );
  }
}

export default withRouter(App);