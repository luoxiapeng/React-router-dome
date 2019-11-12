import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Index from './pages/Index'
import List from './pages/List'

function AppRouter(params) {
  return (
    <Router>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/list/'>列表</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/" component={List} />
    </Router>
  )
}

export default AppRouter;