import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from '@/App'
import Login from '@/views/login'
import Admin from '@/admin'
import Home from '@/views/home'
import Buttons from '@/views/ui/buttons'
import NoMatch from '@/views/nomatch'

class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/home' component={Home}/>
                                <Route path='/admin/ui/buttons' component={Buttons}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        )
    }
}

export default IRouter
