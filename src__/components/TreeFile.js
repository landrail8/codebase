import React, { Component } from 'react'
import Directory from '../fileTreeStructure/Directory';
import File from '../fileTreeStructure/File';
import { mergeStyleObjects } from '../utils/helpers';
import defaultStyles from '../utils/defaultStyles';
import ElemTree from './../components/ElemTree';


export default class TreeFile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.tree = props.data; //замоканная файловая структура кодовой базы, только js-файлы
    this.handleDirectoryClick = this.handleDirectoryClick.bind(this);
    this.getChildrenByPath = this.getChildrenByPath.bind(this);
    this.isVisible = this.isVisible.bind(this);
  }

  handleDirectoryClick(file) {
    this.toggleVisibility(file.filePath);
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



  isVisible(path) {
    const element = this.getChildrenByPath(path, this.state.tree);
    return element.isVisible;
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

  render() {
     
    
    let test = this.getChildrenByPath(this.props.path, this.props.data);

    let file;
    let arr = [];

    for (let element of test.children) {
      file = {};
      file.filePath = element.path;
      file.isDirectory = element.children ? true : false;
      arr.push(file);
    }
    arr.sort((a, b) => (a.isDirectory === b.isDirectory)? 0 : a.isDirectory? 0 : 1);

    const files = arr;//this.state.files;

    const fileTreeStyle = this.props.fileTreeStyle ? mergeStyleObjects(defaultStyles.fileTreeStyle, this.props.fileTreeStyle) : defaultStyles.fileTreeStyle;
    const directoryStyle = this.props.directoryStyle ? mergeStyleObjects(defaultStyles.directoryStyle, this.props.directoryStyle) : defaultStyles.directoryStyle;
    const fileStyle = this.props.fileStyle ? mergeStyleObjects(defaultStyles.fileStyle, this.props.fileStyle) : defaultStyles.fileStyle;

    return (
      files.length > 0 &&
      <ul className="_fileTree" style={fileTreeStyle} >
        {files.map(file => {

          const filePath = file.filePath;
          const fileName = filePath.split('/').slice(-1).join('');

          return file.isDirectory ?
          <li className="_directory" key={filePath + ' Directory'} style={directoryStyle}>
              <div onClick={() => this.handleDirectoryClick(file)}>
                  <Directory className="directory" visible={this.isVisible(file.filePath)} theme={this.props.directoryTheme} />{`               ${fileName}`}
              </div>
              {this.isVisible(file.filePath) &&
              <TreeFile 
                path = {file.filePath}
                data = {this.props.data}
                directoryTheme={this.props.directoryTheme || 'light'}
              />
              }
          </li>
          :
          <li className="_file" key={filePath} style={fileStyle}><File className="file" />{`               ${fileName}`}</li>;
          // <ElemTree
          //   file = {file}
          //   fileStyle = {fileStyle}
          // />
          
          })
        }
      </ul>
    );
  }
}

