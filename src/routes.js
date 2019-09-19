import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header-Deslogado'
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;