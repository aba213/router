import React from 'react'
import App from '../App'
import Description from './Description'
import {Route} from 'react-router-dom'

function Router() {
    return (
        <div>
            
            <Route exact path='/' component={App} />
            <Route path='/description/:title' component={Description}/> 
        </div>
    )
}
 
export default Router
