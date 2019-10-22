import React from 'react'

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