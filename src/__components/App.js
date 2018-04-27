import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import LangProvider from './LangProvider'
import history from '../history'

import data from '../fileTree/structureFiles.json'


class App00 extends Component {
    static propTypes = {

    };

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    state = {
        username: '',
        language: 'ru'
    }

    changeLanguage = language => ev => this.setState({ language })

    render() {
        console.log('---', 0)
        return (
            <ConnectedRouter history = {history}>
                <LangProvider language = {this.state.language}>
                    <div>
                        <ul>
                            <li onClick = {this.changeLanguage('en')}>English</li>
                            <li onClick = {this.changeLanguage('ru')}>Russian</li>
                        </ul>
                        <div>
                            <h2>Main menu</h2>
                            <div><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink></div>
                            <div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
                            <div><NavLink activeStyle={{color: 'red'}} to="/articles">Articles</NavLink></div>
                        </div>
                        <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                        <Switch>
                            <Route path="/counter" component={Counter}/>
                            <Route path="/filters" component={Filters}/>
                            <Route path="/articles/new" component={NewArticle}/>
                            <Route path="/articles" component={Articles}/>
                            <Route path='/comments' component={CommentsPage}/>
                            {/*<Redirect from = '/comments/' to = '/comments/1'/>*/}
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </LangProvider>
            </ConnectedRouter>
        )
    }

    handleUserChange = (username) => this.setState({ username })
}


var data2 = {
    "id": 1,
    "name": "All Categories",
    "children": [
      {
        "id": 2,
        "name": "For Sale",
        "children": [
          {
            "id": 3,
            "name": "Audio & Stereo"
          },
          {
            "id": 4,
            "name": "Baby & Kids Stuff"
          },
          {
            "id": 5, 
            "name": "Music, Films, Books & Games"
          }
        ]
      },
      {
        "id": 6,
        "name": "Motors",
        "children": [
          {
            "id": 7,
            "name": "Car Parts & Accessories"
          },
          {
            "id": 8,
            "name": "Cars"
          },
          {
            "id": 13,
            "name": "Motorbike Parts & Accessories"
          }
        ]
      },
      {
        "id": 9,
        "name": "Jobs",
        "children": [
          {
            "id": 10,
            "name": "Accountancy"
          },
          {
            "id": 11,
            "name": "Financial Services & Insurance"
                  },
          {
            "id": 12,
            "name": "Bar Staff & Management"
          }
        ]
      }
    ]
}
 


class TreeNode extends Component {
    constructor(props) {
        super(props);
        //this.state = {data: data};
    }
    render() {
    //if (!this.state.children) this.state.children = [];
        return (
        <div>
            <li>
                {this.props.node.name}
                <ul>
                    {this.props.node.children ? this.props.node.children.map((child) => {
                    //console.log(child.id);
                    return <TreeNode node = {child}/>}) : null}
                </ul>
            </li>
            {/* <div>
            {this.props.node.children ? this.props.node.children.map((child) => {
                console.log(child.id);
                return <TreeNode node = {child}/>}) : null}
            </div> */}
        </div>
        // <li>{this.props.node.name}
        //   <div>test</div>
        //   <a>{this.props.node.name}
        //     <ul>
        //       {this.props.node.children.map((child) => {
        //         console.log(child.id);
        //         return <TreeNode node = {child}/>
        //       })}
        //     </ul>
        //   </a>
        // </li>
        )
    }
}
  
class CategoryTree extends Component {
    render() {
        return (
        <div>
            <h1>Tree</h1>
            <div className = "panel panel-default">
            <div className = "panel-body">
                <ul className = "category-tree">
                <TreeNode node = {data}/>
                </ul>                  
            </div>
            </div> 
        </div>  
        );
    }
}

// ReactDOM.render(
// <CategoryTree />,
// document.getElementById('app')
// );

export default CategoryTree