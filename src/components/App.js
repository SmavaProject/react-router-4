import React from 'react';
import {
  BrowserRouter,
  Route, Switch
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

/***
 * Switch renders the first component which it finds which matches the path. If it does not
 * find any path, it renders the last component (which is without path)
 */
const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={() => <About title="About"/>}/>
            <Route exact path="/teachers" component={Teachers}/>
            <Route path="/teachers/:topic/:fname-:lname" component={Featured}/>
            <Route path="/courses" component={Courses}/>
            <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
