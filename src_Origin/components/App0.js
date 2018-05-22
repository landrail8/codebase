import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'react-select/dist/react-select.css'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'

import Directory from './Directory';
import File from './File';
import { getAllFiles } from '../utils/file-functions';
import { mergeStyleObjects } from '../utils/helpers';
import defaultStyles from '../utils/defaultStyles';


export default class FileTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: this.props ? this.props.files : []
        };
    //    this.handleDirectoryClick = this.handleDirectoryClick.bind(this);
    //   this.onFileClick = this.onFileClick.bind(this);
    }
  
    // componentWillReceiveProps({ directory }) {
    //   if (this.props.openedDirectories && this.props.openedDirectories[directory]) {
    //     this.setState({ files: this.props.openedDirectories[directory] });
    //   } else {
    //     return directory && getAllFiles(directory)
    //     .then(files => this.setState({ files }))
    //     .catch(console.error);
    //   }
    // }
  
    handleDirectoryClick(file) {

      console.log(file);
      this.props.toggleVisibility(file.filePath);

      //this.props.toggleVisibility(file.filePath);



      // if ((this.props.openedDirectories && !this.props.openedDirectories[file.filePath]) /*|| this.props.isVisible[file.filePath]*/) {
      //   return getChildrenByPath(file.filePath, this.props.data); /*getAllFiles(file.filePath)
      //   .then(files => this.props.dispatchOpenDirectory(file.filePath, files))
      //   .catch(console.error);*/
      // }
    }
    
    // getChildrenByPath(path, data) {
    //     if(data.path === path) {
    //         return data;
    //     } else if (data.children) {
    //         for (let elem of data.children) {
    //             const value = this.getChildrenByPath(path, elem);
    //             if (value) {
    //                 return value;
    //             }
    //         }
    //         return null;
    //     } else {
    //         return null;
    //     } 
    // }

    onFileClick(file) {
      console.log(file);
      this.props.onFileClick && this.props.onFileClick(file);
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
  
      // Lines 58-60 merge any style props passed down with default props.  This way no unexpected changes
      // occur as a result of passing down style props.
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
                    <Directory className="directory" visible={this.props.isVisible(file.filePath)} theme={this.props.directoryTheme} />{`               ${fileName}`}
                </div>
                {this.props.isVisible(file.filePath) &&
                <FileTree 
                  path = {file.filePath}
                  data = {this.props.data}
                // // directory={file.filePath}
                // // files={file.files}
                // // onFileClick={this.props.onFileClick}
                  toggleVisibility={this.props.toggleVisibility}
                // // dispatchOpenDirectory={this.props.dispatchOpenDirectory}
                  openedDirectories={this.props.openedDirectories}
                  directoryTheme={this.props.directoryTheme || 'light'}
                  isVisible={this.props.isVisible}
                // // fileTreeStyle={this.props.fileTreeStyle}
                // // directoryStyle={this.props.directoryStyle}
                // // fileStyle={this.props.fileStyle}
                />
                } 
            </li>
            :
            <li className="_file" key={filePath} onClick={() => this.onFileClick(file)} style={fileStyle}><File className="file" />{`               ${fileName}`}</li>;
            })
          }
        </ul>
      );
    }
  }






// class TreeNode extends Component {
//     constructor(props) {
//         super(props);
//         //this.state = {data: data};
//     }
//     render() {
//     //if (!this.state.children) this.state.children = [];
//         return (
//         <div>
//             <li>
//                 {this.props.node.name}
//                 <ul>
//                     {this.props.node.children ? this.props.node.children.map((child) => {
//                     //console.log(child.id);
//                     return <TreeNode node = {child}/>}) : null}
//                 </ul>
//             </li>
//         </div>
//         )
//     }
// }
  
// class CategoryTree extends Component {
//     render() {
//         return (
//         <div>
//             <h1>Tree</h1>
//             <div className = "panel panel-default">
//             <div className = "panel-body">
//                 <ul className = "category-tree">
//                 <TreeNode node = {data}/>
//                 </ul>                  
//             </div>
//             </div> 
//         </div>  
//         );
//     }
// }

//export default CategoryTree