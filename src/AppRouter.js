import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Index from './pages/Index'
import List from './pages/List'
import Home from './pages/home'
import  './index.css'
import Video from './video'
import Workplace from './pages/Workplace'

function AppRouter() {
  return (
    // <Router>
    //   <ul>
    //     <li><Link to='/'>首页</Link></li>
    //     <li><Link to='/list/123'>列表</Link></li>
    //   </ul>
    //   <Route path='/home/' component={Home}/>
    //   <Route path="/" exact component={Index} />
    //   <Route path="/list/:id" component={List} />
    // </Router>
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">博客</Link></li>
            <li><Link to="/Video/">视频</Link></li>
            <li><Link to="/Workplace/">职场</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path='/' exact component={Index}></Route>
          <Route path='/Video/'  component={Video}></Route>
          <Route path='/list/:id' exact component={List}></Route>
          <Route path='/home/' exact component={Home}></Route>
          <Route path='/Workplace/'  component={Workplace}></Route>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;