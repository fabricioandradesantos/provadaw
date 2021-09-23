import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Dados/Home'
import Dados from './pages/Dados/Dados'
    
const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/dados" exact component= {Dados} />
        </Switch>
    )
}

export default Routes;