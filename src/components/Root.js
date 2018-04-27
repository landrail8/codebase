import React from 'react'
import PropTypes from 'prop-types'
import App from './App'
import store from '../store'
import {Provider} from 'react-redux'
import data from '../fileTree/structureFiles.json'

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.tree = data;
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.isVisible = this.isVisible.bind(this);
    }

    toggleVisibility(path) {
        const element = this.getChildrenByPath(path, this.state.tree);
        if(element && element.children) {
            if(element.isVisible) {
               element.isVisible = false;
            } else {
                element.isVisible = true;
            }
        }
        this.setState({tree: this.state.tree});
    }

    isVisible(path) {
        const element = this.getChildrenByPath(path, this.state.tree);
        if (element.isVisible) {
            return element.isVisible;
        } else {
            return false;
        }
    }

    getChildrenByPath(path, data) {
        if(data.path === path) {
            return data;
        } else if (data.children) {
            for (let elem of data.children) {
                const value = this.getChildrenByPath(path, elem);
                if (value) {
                    return value;
                }
            }
            return null;
        } else {
            return null;
        } 
    }

    render() {
        return (
        //<Provider store = {store}>
            <App 
                path = "root" 
                data = {this.state.tree}
                openedDirectories = {["root"]}
                directoryTheme = 'dark' //or light
                isVisible = {{"root":true}}
                toggleVisibility = {this.toggleVisibility}
                isVisible = {this.isVisible}

            />
        //</Provider>
    )} 
}

Root.propTypes = {
}

export default Root