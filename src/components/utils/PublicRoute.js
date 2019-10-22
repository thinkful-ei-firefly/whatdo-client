import React from 'react'

import {Route, Redirect} from 'react-router-dom'
import TokenService from '../../services/token-service'

export default function PublicRoute({component, ...props}){
  const Component = component

  render(){
    return(
      <Route 
        {...props}
        render={componentsProps => 
          TokenService.hasAuthToken()
          ? <Redirect to={'/'} />
          : <Component {...componentsProps} />
        }
      />
    )
  }
}