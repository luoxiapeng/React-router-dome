import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          list:[
            {cid:123,title:'个人博客1'},
            {cid:234,title:'个人博客2'},
            {cid:456,title:'个人博客3'},
          ]
         }
    }
    render() { 
      return ( 
        <div>
          <Redirect to="/home/" />
          <ul>
            {
              this.state.list.map((item,index)=>{
                return (
                  <li key={index}>
                    <Link to={`/list/`+item.cid}>{item.title}</Link>
                  </li>
                  
                )
              })
            }
          </ul> 
        </div>
        
        
      );
    }
}
 
export default Index;