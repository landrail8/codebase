import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import File from '../fileTreeStructure/File';
import DescriptionForm from './../components/DescriptionForm';

export default class ElemTree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.file = props.file;
    this.state.fileStyle = props.fileStyle;
    this.state.isOpen = false;
    this.handlerCollapse = this.handlerCollapse.bind(this);
    
    // this.handleDirectoryClick = this.handleDirectoryClick.bind(this);
    // this.getChildrenByPath = this.getChildrenByPath.bind(this);
    // this.isVisible = this.isVisible.bind(this);
  }

  onFileClick(id) {
    //console.log(this.state.isOpen);
    this.setState({isOpen: this.state.isOpen === true ? false : true});
    //this.state.isOpen = this.state.isOpen === true ? false : true;
    //console.log(file);
    // ReactDOM.render(<div>wefwefwefwefwef</div>,
    //  document.querySelector(`#${id}`));
    
    // RENDER info about file

  };

  handlerCollapse() {
    this.setState({isOpen: false});
  }


  render() {
    
    const filePath = this.state.file.filePath;
    const filePathPlainString = filePath.replace(/\//g, "_").replace(/\./g, "_");
    const fileName = filePath.split('/').slice(-1).join('');
    const fileStyle = this.state.fileStyle;
    const isOpen = this.state.isOpen;
    return (
      <div>
        <li id={filePathPlainString} className="_file" key={filePathPlainString} onClick={() => this.onFileClick(filePathPlainString)} style={fileStyle}><File className="file" />{`               ${fileName}`}</li>
        <DescriptionForm 
          isOpen = {isOpen}
          handlerCollapse = {this.handlerCollapse}
        />

      </div>
    )
  }

  


}




